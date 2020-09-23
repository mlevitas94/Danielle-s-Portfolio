insert into deprojectstest(
    title,
    blurb,
    images,
    type,
    links
)values(
    $1,
    $2,
    $3::text[],
    $4,
    $5::json[]
)