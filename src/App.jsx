import { useState } from 'react'
import './App.css'

import {
  navLinks,
  stats,
  features,
  courses,
  teachers,
  testimonials,
} from "./data/data";

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import States from './components/states/States';
import SectionTitle from './components/sectionTitle/SectionTitle';
import FeatureCard from './components/featureCard/FeatureCard';
import CourseCard from './components/courseCard/CourseCard';
import TeacherCard from './components/teacherCard/TeacherCard';
import TestimonialCard from './components/testmonial/Testmonial';
import CTA from './components/cta/CTA';
import Footer from './components/footer/Footer';



function App() {


  return (
    <>
      <Navbar
        schoolName="Bright Future School"
        links={navLinks}
      />


      <Hero
      badge="Welcome to Bright Future School"
        title="Building Bright Futures Through Education"
        description="We provide quality education, experienced teachers, and a supportive learning environment that helps students prepare for a successful future."
        buttonText="Explore Courses"
        image="https://images.pexels.com/photos/8926842/pexels-photo-8926842.jpeg"
      />

      <States stats={stats} />



 

    {/* feature section */}
   <div className="max-w-7xl mx-auto p-6">

          <SectionTitle
            subtitle="Why Choose Us"
            title="A Better Place to Learn"
            description="Our school combines quality education, experienced teachers, and a modern learning environment."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}

          </div>

        </div>




    {/* courses */}
          <section
        id="courses"
        className="py-20"
      >

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            subtitle="Our Programs"
            title="Explore Our Courses"
            description="Choose from a variety of programs designed to develop academic and practical skills."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                icon={course.icon}
                title={course.title}
                description={course.description}
                duration={course.duration}
                students={course.students}
              />
            ))}

          </div>

        </div>

      </section>




       {/* 6. Teachers */}
      <section
        id="teachers"
        className="py-20 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Teachers"
            description="Our dedicated teachers work hard to help every student reach their potential."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                name={teacher.name}
                subject={teacher.subject}
                experience={teacher.experience}
                image={teacher.image}
              />
            ))}

          </div>

        </div>

      </section>




        {/* 7. Testimonials */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            subtitle="Student Reviews"
            title="What Our Students Say"
            description="Hear from some of our students about their experience at Bright Future School."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                comment={testimonial.comment}
                image={testimonial.image}
              />
            ))}

          </div>

        </div>

      </section>



       {/* 8. CTA */}
      <CTA
        title="Start Your Journey With Us"
        description="Join Bright Future School and become part of a community that values learning, growth, and success."
        buttonText="Apply for Admission"
      />

       {/* 9. Footer */}



      <Footer
        schoolName="Bright Future School"
        email="info@brightfuture.edu"
        phone="+93 700 123 456"
        address="Kabul, Afghanistan"
      />

    




    </>
  )
}

export default App
