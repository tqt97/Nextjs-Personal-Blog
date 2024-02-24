import { slug } from 'github-slugger';
import Link from 'next/link';

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {  
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium capitalize border hover:shadow-md dark:bg-primary-50 dark:hover:bg-white rounded-md p-1 m-1 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
