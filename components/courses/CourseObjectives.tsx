import { ReactElement, useState } from 'react';
import { Box, Button, Paper, Tab, Tabs, Typography } from '@mui/material';
import CourseReview from './CourseReview';

const goals = [
  'Makes you happy',
  'Makes you rich',
  'Makes you famous',
  'be great',
];
const ranges = {
  content: 'Content',
  reviews: 'Reviews',
};
interface Props {
  category?: string;
  target?: string;
  modified?: string;
}
const CourseObjectives: React.FC<Props> = (props: Props): ReactElement => {
  const { target, category, modified } = props;
  const [tabValue, setTabValue] = useState(0);
  return (
    <Paper className="flex flex-col p-10 w-full shadow rounded-2xl overflow-hidden">
      <div className="flex sm:flex-row items-start justify-between">
        <Tabs
          value={tabValue}
          onChange={(ev, value) => setTabValue(value)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
          className="-mx-4 min-h-40"
          classes={{
            indicator: 'flex justify-center bg-transparent w-full h-full',
          }}
          TabIndicatorProps={{
            children: (
              <Box
                sx={{ bgcolor: 'text.disabled' }}
                className="w-full h-full rounded-full opacity-20"
              />
            ),
          }}
        >
          {Object.entries(ranges).map(([key, label]) => (
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
              disableRipple
              key={key}
              label={label}
            />
          ))}
        </Tabs>
      </div>
      <div className="w-full sm:mt-5">
        {tabValue === 0 && (
          <div>
            <Typography variant="subtitle1" className="mb-4">
              Target Audience: {target || 'Beginner'}
            </Typography>
            <Typography variant="subtitle1" className="mb-4">
              Category: {category?.toString() || 'web'}
            </Typography>
            <Typography variant="subtitle1" className="mb-4">
              Last Updated: {modified || new Date().toDateString()}
            </Typography>
            <Typography variant="subtitle1" className="mb-4">
              Requirements:{' '}
            </Typography>
            <Typography variant="subtitle1" className="mb-4">
              AT the end of this course, you should be able to do the following:
            </Typography>
            <Button>Join Class</Button>
          </div>
        )}
        {tabValue === 1 && (
          <div className="flex flex-col">
            <CourseReview />
            <div className="flex-auto grid grid-cols-4 gap-16 *mt-24">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="col-span-2 flex flex-col items-center justify-center py-8 px-2 rounded-2xl bg-indigo-50 text-indigo-800"
                >
                  <Typography className="mt-4 text-sm sm:text-lg font-medium">
                    {goal}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default CourseObjectives;
