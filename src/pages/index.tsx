import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Icon name="kings" className="kings"/>
      <Button disabled={true} type="primary" nativeType='button'>默认按钮</Button>
      <Button type="success" >成功按钮</Button>
      <Button size="large" type="danger">危险按钮</Button>
      <Button size="small" type="warning">警告按钮</Button>
      <Link href="/DialogPage">
        DialogPage
      </Link>
    </>
  );
}
