import React from 'react';
import Button from '../function/button';
import RequestList from './RequestList';
import JoinList from './SendRequest';
import Link from 'next/link';
import Wrapper from '../components/Wrapper';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Wrapper>
        <h2 className='my-7 text-3xl font-bold'>Dashboard</h2>
        <Link href='/inbox'>
          <Button style='bg-primary border-0'>Inbox</Button>
        </Link>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div>
            <h3 className='my-1 mb-3 text-2xl font-bold'>Requests</h3>
            <hr className='border border-grey-600' />
            <RequestList />
          </div>
          <div>
            <h3 className='mb-3 text-2xl font-bold'>Looking for pairs</h3>
            <hr className='border border-grey-600' />
            <JoinList />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default page;
