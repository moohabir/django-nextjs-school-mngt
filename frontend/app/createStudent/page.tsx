'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const url = process.env.NEXT_PUBLIC_URL;

export default function CreateStudent() {
  //const [newStudent, setNewStudent] = useState({});
  const [student_number, setStudentNumber] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [field_of_study, setFieldOfStudy] = useState('');
  const [gpa, setGpa] = useState('');

  const router = useRouter();

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Content = {
      student_number,
      first_name,
      last_name,
      email,
      field_of_study,
      gpa,
    };
    try {
      const response = await axios.post(`${url}`, Content);

      //router.push('/');
      console.log(response.data);
      setStudentNumber('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setFieldOfStudy('');
      setGpa('');

      router.push('/');

      // Handle the response as needed
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="items center text-center bg-slate-800 pt-10 ">
      <h1 className="text-white p-4">Create New Student</h1>
      <form
        onSubmit={handleCreate}
        className=" flex flex-col  items-center  gap-1  text-black rounded-md "
      >
        {/* Form to input new student data */}
        <input
          type="number"
          name="student_number"
          placeholder="Student Number"
          value={student_number}
          onChange={(e) => setStudentNumber(e.target.value)}
          className="rounded-sm p-4   w-1/2"
        />
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="rounded-sm p-4  w-1/2"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="rounded-sm p-4  w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-sm p-4  w-1/2"
        />

        <input
          type="text"
          name="field_of_study"
          placeholder="field of study"
          value={field_of_study}
          onChange={(e) => setFieldOfStudy(e.target.value)}
          className="rounded-sm p-4  w-1/2"
        />

        <input
          type="number"
          name="gpa"
          placeholder="Gpa"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
          className="rounded-sm p-4  w-1/2"
        />

        <button
          type="submit"
          className="bg-slate-100 text-black rounded-md p-2 m-4 hover:bg-slate-300"
        >
          Create Student
        </button>
      </form>
    </div>
  );
}
