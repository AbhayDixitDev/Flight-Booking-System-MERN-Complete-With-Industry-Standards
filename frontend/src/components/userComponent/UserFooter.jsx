import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';

const UserFooter = () => {
  return (
    <footer style={{ width: '100vw', height: '15vh', position: 'fixed', bottom: 0 }} className="footer py-3">
      <Row style={{ alignItems: 'center' }}>
        <Col md={12}>
          <p className="text-center text-muted">
            Copyright &copy; {new Date().getFullYear()} All rights reserved
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>
              <GithubOutlined />
            </a>
            <a href="mailto:your-email@gmail.com" style={{margin: '0 10px'}}>
              <MailOutlined />
            </a>
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default UserFooter;
