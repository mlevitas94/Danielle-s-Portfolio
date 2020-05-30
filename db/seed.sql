insert into deprojects(
    title,
    blurb,
    images,
    type,
    links
)values(
    'test title',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Rhoncus mattis rhoncus urna neque viverra. Mauris ultrices eros in cursus turpis massa tincidunt dui. Mattis vulputate enim nulla aliquet porttitor. Id eu nisl nunc mi ipsum faucibus vitae. Cras ornare arcu dui vivamus arcu felis bibendum. Urna et pharetra pharetra massa massa ultricies mi. Ut placerat orci nulla pellentesque dignissim enim. Lacinia quis vel eros donec ac odio tempor orci.',
    '{https://thomsimages.s3-us-west-1.amazonaws.com/park.jpg}',
    'audits',
    array['{"caption":"testlink", "hyperlink":"https://thomsimages.s3-us-west-1.amazonaws.com/park.jpg"}']::json[]

)

