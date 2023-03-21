import { Box, Button, Paper, Skeleton } from '@mui/material';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import DashboardHoc from '../../components/DashboardHoc';
import Coursebar from '../../components/layout/Coursebar';
import { SET_PLAY_ID } from '../../context/actions';
import { Appcontext, AppDpx } from '../../context/AppContext';
import { tLecture } from '../../types/types';
import { useMutation } from 'react-query';
import { getCourseLecture } from '../../api/rest';

const Classroom = () => {
  const { course, playId, user } = useContext(Appcontext);
  const dispatch = useContext(AppDpx);
  const [current, setCurrent] = React.useState<any>(null);

  React.useEffect(() => {
    const currentLecture = course?.curriculum.section
      .flatMap((section) => section.lecture)
      .find((lecture) => lecture.id === playId?.id || 1);
    setCurrent(currentLecture);
  }, [course, playId]);

  const { mutate, isLoading } = useMutation(getCourseLecture, {
    onSuccess(data) {
      dispatch({
        type: SET_PLAY_ID,
        data: data as tLecture,
      });
      console.log(data, 'data');
    },
    onError(error) {
      console.log(error);
    },
  });

  const handleNext = () => {
    if (course === null) return;
    if (!course.id || !user.id) return;

    const payload = {
      id: course.id,
      user: user.id,
      count: playId && playId?.id + 1,
    };

    mutate(payload);
  };

  const handlePrevious = () => {};

  // const current = course?.curriculum.section
  //   .flatMap((section) => section.lecture)
  //   .find((lecture) => lecture.id === playId?.id || 1);

  return (
    <DashboardHoc
      isClass={true}
      curriculum={course?.curriculum}
      courseName={course?.courseName}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isLoading ? (
          <Skeleton variant="rectangular" width={640} height={360} />
        ) : (
          <>
            <Coursebar />
            <Paper className="w-full md:w-2/3">
              {current?.type === 'lecture' && (
                <div className="w-fit">
                  <ReactPlayer
                    url={`https://essl.b-cdn.net/${current?.video}`}
                    width="640"
                    height="360"
                    controls
                  />
                </div>
              )}
              <Box display={'flex'} justifyContent="space-between">
                <Button>Previous</Button>
                <Button onClick={handleNext}>Next</Button>
              </Box>
            </Paper>
          </>
        )}
      </Box>
    </DashboardHoc>
  );
};

export default Classroom;
