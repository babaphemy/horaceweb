import { Paper } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import DashboardHoc from '../../components/DashboardHoc';
import Coursebar from '../../components/layout/Coursebar';
import { AppContext } from '../../context/AllProvider';

const classroom = () => {
	const { lecture } = useContext(AppContext);

	return (
		<DashboardHoc isClass={true}>
			<Coursebar />
			<Paper>
				<p>title</p>
				{lecture?.type === 'lecture' && (
					<ReactPlayer
						url={`https://essl.b-cdn.net/${lecture?.video}`}
						width="640"
						height="360"
						controls
					/>
				)}
			</Paper>
		</DashboardHoc>
	);
};

export default classroom;