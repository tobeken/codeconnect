import React, { ReactNode } from 'react';
import styles from './styles/container.module.css'

interface ContainerProps {
    children:ReactNode;
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-screen-lg m-auto">
        {children}
    </div>
  )
}

export default Container