import Footer from '@/components/Footer'
import Button from 'antd/es/button'
import { useEmotionCss } from '@ant-design/use-emotion-css'
import { SelectLang, useIntl, Helmet, Link } from '@umijs/max'
import Settings from '../../../config/defaultSettings'
import React from 'react'
import LogoWithName from '@/components/LogoWithName'
import { ConfigProvider } from 'antd'
import CreateAISteps from '@/components/CreateAISteps'

const Lang = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 120,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    }
  })

  return (
    <div className={langClassName} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  )
}

const LoginButton = () => {
  const intl = useIntl()

  const loginClassName = useEmotionCss(({ token }) => {
    return {
      width: 80,
      height: 40,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    }
  })

  return (
    <div className={loginClassName}>
      <Link to={'/user/login'} style={{ textDecoration: 'none' }}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#e65c41',
            },
          }}
        >
          <Button type="primary" style={{ width: '100%', height: '100%' }}>
            {intl.formatMessage({
              id: 'menu.login',
              defaultMessage: '登录',
            })}
          </Button>
        </ConfigProvider>
      </Link>
    </div>
  )
}

const Landing: React.FC = () => {
  const intl = useIntl()

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage: "url('/images/back_circle.svg')",
      backgroundRepeat: 'no-repeat',
      '@media screen and (max-width: 1440px)': {
        backgroundSize: 'auto',
      },
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
    }
  })

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.welcome',
            defaultMessage: '欢迎页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '16px 0',
        }}
      >
        <LogoWithName />
        <Lang />
        <LoginButton />
        <CreateAISteps isShowCreate />
      </div>
      <Footer />
    </div>
  )
}

export default Landing
