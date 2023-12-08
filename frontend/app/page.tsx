import Image from 'next/image';

import Students from './students/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Student Management system created with Django and Next.js</h1>

      <Students />
    </main>
  );
}
