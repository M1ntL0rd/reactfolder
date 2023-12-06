import React, { useState, useEffect } from 'react';

function CalcTime() {
const getdate = new Date();
const month = getdate.getMonth();
const year = getdate.getFullYear();
const date = getdate.getDate();
return `${date}/${month}/${year}`;
}
    
export default CalcTime;