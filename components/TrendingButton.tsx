import { Button } from "@/components/ui/button";
import Link from 'next/link';

const TrendingButton = () => {
  return (
    <Link href="/trending" passHref>
      <Button variant="ghost">Trending</Button>
    </Link>
  );
}

export default TrendingButton;
