import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import ContactForm from '../components/ContactForm'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* 네비게이션 링크 */}
          <nav>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/contact">연락처 추가</Link>
              </li>
            </ul>
          </nav>
          
          {/* 라우트 설정 */}
          <Switch>
            <Route path="/contact" component={ContactForm} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App