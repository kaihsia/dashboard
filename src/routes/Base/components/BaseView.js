import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import { Link } from 'react-router'
import './BaseView.scss'
import Menu from '../containers/Menu'

export const BaseView = (props) => (
  <div>
    <Menu />
    {props.children}
  </div>
)

export default BaseView
