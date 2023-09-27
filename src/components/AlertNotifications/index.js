// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="alert-notification-title">Alert Notifications</h1>
    <Notification>
      <div className="notification-card">
        <AiFillCheckCircle className="icon-success" />
        <div className="text-card">
          <h1 className="success-text">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification-card">
        <RiErrorWarningFill className="icon-error" />
        <div className="text-card">
          <h1 className="error-text">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification-card">
        <MdWarning className="icon-warning" />
        <div className="text-card">
          <h1 className="warning-text">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification-card">
        <MdInfo className="icon-info" />
        <div className="text-card">
          <h1 className="info-text">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
