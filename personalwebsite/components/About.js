import React from "react";

function About() {
  return (
    <div className=" flex-col  text-textColor font-primaryFont  ">
      <div className=" text-secondery text-center font-bold items-center md:text-xl lg:text-2xl text-md pt-28 md:pt-56 tracking-widest  ">
        <h1>ABOUT ME</h1>
      </div>
      <div className="block text-center pl-8 pr-8 pt-12 md:text-lg text-sm md:pl-80 md:pt-20 md:pr-80">
        <p>
          Passionate and proactive cybersecurity professional with a strong
          foundation in computer science and programming. I hold a BSc in
          Computer Science from Mahatma Gandhi University and am currently
          pursuing an MCA degree at Indira Gandhi National Open University. My
          expertise lies in ethical hacking and penetration testing, certified
          as an Advanced Penetration Tester (APT) from ehackify research center.
          With a profound knowledge of programming languages such as C, C++,
          Java, HTML, CSS, JavaScript, Python, and PHP, I am equipped to tackle
          diverse cybersecurity challenges.With my strong background in computer
          science, cybersecurity expertise, and a passion for problem-solving, I
          am ready to contribute my skills and knowledge to any organization
          committed to maintaining a secure digital environment.
        </p>
      </div>
    </div>
  );
}

export default About;
