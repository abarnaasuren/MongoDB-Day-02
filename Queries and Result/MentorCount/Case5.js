//Find all the mentors with who has the mentee's count more than 15
db.getCollection('mentors').aggregate(
    [
      {
        $project: {
          _id: 0,
          mentorId: 1,
          mentoName: 1,
          email: 1,
          menteeCount: {
            $size: '$assignedMentees.userId'
          }
        }
      },
      { $match: { menteeCount: { $gt: 15 } } }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );