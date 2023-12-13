import React from 'react';
import { useEffect, useState } from 'react';

export default function CalcTime() {
  
    const DATE = new Date();
    const hr = DATE.getHours();
    const mins = DATE.getMinutes();
    const sec = DATE.getSeconds();
  return `${hr}:${mins}:${sec}`;
}
