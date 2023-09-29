export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string;
  preference?: string;
}

const today = new Date();
export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: 'Shawn Spencer',
    role: 'Dev',
    skills: ['React', 'Angular', 'Test Automation'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work from Home',
  },
  {
    id: 2,
    name: 'Juliet Hara',
    role: 'Designer',
    skills: ['UI/UX Design', 'Illustrator'],
    startDate: `${
      today.getMonth() - 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Office',
  },
  {
    id: 3,
    name: 'Carlton Lassiter',
    role: 'QA Engineer',
    skills: ['Manual Testing', 'Test Automation'],
    startDate: `${
      today.getMonth() - 2
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Office',
  },
  {
    id: 4,
    name: 'Gus T. Guster',
    role: 'DevOps Engineer',
    skills: ['Docker', 'Jenkins'],
    startDate: `${
      today.getMonth() - 3
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work from Home',
  },
  {
    id: 5,
    name: 'Henry Spencer',
    role: 'Manager',
    skills: ['Leadership', 'Project Management'],
    startDate: `${
      today.getMonth() - 4
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Office',
  },
];
