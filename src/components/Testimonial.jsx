import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Md Jamil Akhtar"}
          dept={
            " Computer Science Engineering-Student(4th Year)-At-@AVIT-Chennai"
          }
          img={
            "https://avatars.githubusercontent.com/u/131196293?s=400&u=f68e0622b37d258b739e3d785cce1989eb5858bc&v=4"
          }
        />

        <TestimonialCard
          name={"Md Amjad Ali"}
          dept={
            " Computer Science Engineering-Student(4th Year)-At-@AVIT-Chennai"
          }
          img={
            "https://media.licdn.com/dms/image/D5603AQHx-qtOOJ3DCg/profile-displayphoto-shrink_400_400/0/1683388524576?e=1689811200&v=beta&t=fe7BQEFXZ-99m1QnXs_Jtv00vqZBGq7e3dRkkIqztOo"
          }
        />
        <TestimonialCard
          name={"Md Irshad Shiddiqui"}
          dept={
            " Computer Science Engineering-Student(4th Year)-At-@AVIT-Chennai"
          }
          img={
            "https://media.licdn.com/dms/image/D5635AQGARVG9AGLJ6A/profile-framedphoto-shrink_400_400/0/1683470421210?e=1684839600&v=beta&t=sFZBCd5GSpcB7EY70mpAdiUQi5IL57lyNhGumxm_-gY"
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, img, dept }) => (
  <article>
    <img src={img} alt="Users" />
    <h4>{name}</h4>
    <p>{dept}</p>
  </article>
);

export default Testimonial;
