"use client"
import HeaderResponse from '@/components/status/Headerresponse';
import Main from '@/components/status/Main';
import Statusheader from '@/components/status/Statusheader';
import { addResults } from '@/utils/redux/statusSlice';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function URLStatusChecker() {
  const { status } = useSelector((store) => store.status)

  console.log(status);

  return (
    <div className='w-full h-full bg-indigo-50/30'>
      <Statusheader />
      {status.length > 0 && (<Main />)}
      <HeaderResponse />
    </div>
  );
}

export default URLStatusChecker;
