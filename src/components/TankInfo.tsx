'use client'
import { useTankContext } from '@/services/TankContext';
import React from 'react'

const TankInfo: React.FC = () => {

    const tankContext = useTankContext();

  return (
    <div>TankInfo</div>
  )
}

export default TankInfo;