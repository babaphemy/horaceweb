import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  TextField,
  IconButton,
  Alert,
  InputAdornment,
  Link,
} from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import subtract from '../../assets/img/subtract.png';
import fb from '../../assets/img/fbcolor.png';
import google from '../../assets/img/ggcolor.png';
import yeah from '../../assets/img/yeah.png';
import man from '../../assets/img/man.png';
import { loginStyles } from '../../styles/loginStyles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { loginUser } from '../../api/rest';
import { AppDpx } from '../../context/AppContext';
import { USER_ADD } from '../../context/Action';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useRouter } from 'next/router';
import Loginbox from '../../components/user/Loginbox';

// Form Validation with Yup

const schema = yup.object().shape({
  email: yup
    .string()
    .email('You must enter a valid email')
    .required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(4, 'Password is too short - should be 4 chars minimum.'),
});

const defaultValues = {
  email: '',
  password: '',
};

// Props
type loginProps = {
  email: string;
  password: string;
  type?: any;
};

const Login = () => {
  const dispatch = React.useContext(AppDpx);
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [al, setAlert] = React.useState<{
    show: boolean;
    msg: string;
  } | null>(null);

  const {
    control,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { mutate } = useMutation(loginUser, {
    onSuccess: (data: any) => {
      localStorage.setItem('horaceUser', JSON.stringify(data));
      dispatch({ type: USER_ADD, payload: data });
      router.push('/');
      reset(defaultValues);
    },
    onError: (error: any) => {
      setAlert({ show: true, msg: 'Login Failed, Please Try Again' });
    },
  });

  const onSubmit = (data: loginProps) => {
    data.type = 'USER';
    mutate(data);
  };

  return (
    <Box>
      <Header />
      <Box sx={loginStyles.body}>
        <Container maxWidth="lg">
          <Box sx={loginStyles.center}>
            <Box sx={loginStyles.box}>
              <Loginbox />

              <Box sx={loginStyles.subtract}>
                <Image
                  src={subtract}
                  alt="logo"
                  width={'450rem'}
                  height={'550rem'}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                  }}
                />
                <Box sx={loginStyles.glass}>
                  <Typography variant="h5" sx={loginStyles.note}>
                    the best courses you will find here login to get started
                  </Typography>
                  <Image
                    src={man}
                    alt="man holding a laptop"
                    width={'420rem'}
                    height={'400rem'}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
