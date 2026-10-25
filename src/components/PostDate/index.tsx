import { dateFormatted } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
};

export async function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className='text-slate-600 text-sm/tight'
      dateTime={dateTime}
      title={await dateFormatted(dateTime)}
    >
      {await dateFormatted(dateTime)}
    </time>
  );
}
