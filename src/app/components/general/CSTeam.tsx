import React from 'react';
import Image from 'next/image';

const CSTeam = () => {
  const teamMembers = [
    {
      name: 'Isaac Ruiz',
      imageUrl: 'https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg',
      major: 'Computer Science',
      graduationYear: 2024
    },
    {
      name: 'Drake Sorensen',
      imageUrl: 'https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg',
      major: 'Computer Science',
      graduationYear: 2024
    },
    {
      name: 'Jaco Westermeyer',
      imageUrl: 'https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg',
      major: 'Computer Science',
      major2: 'Engineering',
      graduationYear: 2024
    },
    {
      name: 'Megan Himm',
      imageUrl: 'https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg',
      major: 'Computer Science',
      graduationYear: 2024
    }
  ];

  return (
    <>
      {/* For demo purpose */}
      <div className="container py-5">
        <div className="row text-center text-white">
          <div className="col-lg-8 mx-auto">
            <h1 className="text-center">Computer Science Team</h1>
            <p className="lead mb-0">Meet the individuals that created this website.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4" >
                <Image
                  src={member.imageUrl}
                  height={100}
                  width={100}
                  className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
                  alt=''
                />
                <h5 className="mb-0 text-dark">{member.name}</h5>
                <div style={{height: '4em'}}>
                <span className="small text-uppercase text-muted">{member.major}</span>
                <p className="text-secondary small text-uppercase text-muted">{member.major2}</p>
                </div>
                <p className="text-secondary">Class of {member.graduationYear}</p>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="bi bi-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CSTeam;
