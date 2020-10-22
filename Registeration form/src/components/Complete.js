import React from 'react'
import styled from "styled-components";

const Complete = ({className, status}) => {
  return (
    <div className={className}>
        <img src={require(status !== 'Error'? '../extra/images/done.png' : '../extra/images/fail.png')} alt="successful" />
        <h3>{status !== 'Error'? `Welcome ${status} to The filteration Phase` : "Ops! Something went wrong, Try again!"} </h3>
    </div>
  )
}

export default styled(Complete)`
  img{
    width: 100%;
  }
  h3{
    width: 90%;
    text-align: center;
    margin: 5px auto;
  }
`
