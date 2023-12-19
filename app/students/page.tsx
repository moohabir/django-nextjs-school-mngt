'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StudentList from '../components/StudentList';
import Link from 'next/link';
import { Student } from '@/types';

const url = process.env.NEXT_PUBLIC_URL;

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data and update the state
    async function fetchStudents() {
      try {
        const response = await fetch(`${url}`);
        const studentsData = await response.json();
        setStudents(studentsData);
      } catch (error: any) {
        console.log(error.message);
      }
    }

    fetchStudents();
  }, []);

  return (
    <div className="p-4 border items-center flex flex-col gap-1 bg-slate-800 text-slate-100">
      <h1>All Students</h1>
      {students.map((student: Student) => (
        <StudentList
          key={student.id}
          student={student}
        />
      ))}
      <Link href="/createStudent">
        <button>Add Student</button>
      </Link>
    </div>
  );
}
