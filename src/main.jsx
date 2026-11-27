import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Home, Search, Sparkles, FileText, UserRound, Bell, Bookmark,
  ChevronRight, MapPin, BriefcaseBusiness, GraduationCap, Target,
  Wallet, ArrowRight, Building2, MessageCircle, Users, Menu, X,
  CreditCard, Smartphone, CheckCircle2, Upload, ArrowLeft,
  Megaphone, Headphones, CircleHelp, Gift, TriangleAlert, ShieldCheck,
  ListChecks, Send, Paperclip, ChevronDown, MessageSquareText,
  Heart, Eye, Plus, MessageSquare, Phone, MoreVertical
} from 'lucide-react';
import './style.css';

function App() {
  const [screen, setScreen] = useState('splash');
  const [userType, setUserType] = useState('');
  const [plan, setPlan] = useState('Free');
  const [payment, setPayment] = useState('카드');
  const [activeTab, setActiveTab] = useState('홈');
  const [savedJobs, setSavedJobs] = useState([]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [applicationFilter, setApplicationFilter] = useState('전체');
  const [recentViewedJobs, setRecentViewedJobs] = useState([
    { id: 2, company: '(주) SK 하이닉스', title: '반도체 신입 채용', location: '경기', type: '신입', deadline: 'D-20', viewedAt: '2026. 11. 25' },
    { id: 1, company: '(주) 삼성전자', title: '마케팅 신입 채용', location: '서울', type: '신입', deadline: 'D-3', viewedAt: '2026. 11. 24' }
  ]);
  const [search, setSearch] = useState('');
  const [selectedSpecField, setSelectedSpecField] = useState('');
  const [selectedSpecRole, setSelectedSpecRole] = useState('');
  const [selectedSuccessId, setSelectedSuccessId] = useState(null);
  const [selectedAiTool, setSelectedAiTool] = useState('');
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [aiSearchSubmitted, setAiSearchSubmitted] = useState('');
  const [companyQuery, setCompanyQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [interviewRole, setInterviewRole] = useState('서비스 기획');
  const [interviewMode, setInterviewMode] = useState('실전 모의면접');
  const [interviewQuestionIndex, setInterviewQuestionIndex] = useState(0);
  const [interviewAnswer, setInterviewAnswer] = useState('');
  const [interviewAnswers, setInterviewAnswers] = useState([]);
  const [interviewFeedback, setInterviewFeedback] = useState(null);
  const [companyJobFocus, setCompanyJobFocus] = useState('');
  const [openCompanyAnswer, setOpenCompanyAnswer] = useState(null);
  const [mentorApplyOpen, setMentorApplyOpen] = useState(false);
  const [mentorApplyPurpose, setMentorApplyPurpose] = useState('직무 및 취업 준비 상담');
  const [mentorApplyMethod, setMentorApplyMethod] = useState('채팅');
  const [mentorApplyMessage, setMentorApplyMessage] = useState('');
  const [mentorApplyDate, setMentorApplyDate] = useState('');
  const [mentorApplyTime, setMentorApplyTime] = useState('오후 7시');
  const [mentorApplications, setMentorApplications] = useState([]);
  const [chatView, setChatView] = useState('list');
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [chatCategory, setChatCategory] = useState('전체');
  const [chatSearch, setChatSearch] = useState('');
  const [chatDraft, setChatDraft] = useState('');
  const [chatRooms, setChatRooms] = useState([
    { id: 1, name: '정윤우', role: '금융공기업 | 일반행정', preview: '인턴 시절 행정 업무 경험이 궁금해요!', time: '오후 2:41', unread: 2, favorite: true, messages: [
      { id: 1, from: 'them', text: '안녕하세요! 금융공기업 일반행정 직무를 준비하고 계신가요?', time: '오후 2:30' },
      { id: 2, from: 'me', text: '네! 인턴 경험과 자격증 준비에 대해 여쭤보고 싶어요.', time: '오후 2:35' },
      { id: 3, from: 'them', text: '인턴 시절에는 행정 업무의 비효율을 개선했던 경험을 강조했어요. 준비하시는 직무와 연결해서 설명하면 좋아요!', time: '오후 2:41' }
    ]},
    { id: 2, name: '이지원', role: '증권사 | 리서치 IB', preview: '기업분석 포트폴리오는 어떻게 준비하셨나요?', time: '어제', unread: 0, favorite: false, messages: [
      { id: 1, from: 'them', text: '기업분석 포트폴리오는 관심 산업을 정하고 기업 실적과 시장 흐름을 분석하면서 만들었어요.', time: '어제' }
    ]},
    { id: 3, name: '박서준', role: '인터넷은행 | 데이터 리스크', preview: '파이썬 프로젝트 경험을 정리해 보세요.', time: '11.24', unread: 0, favorite: true, messages: [
      { id: 1, from: 'them', text: '파이썬 프로젝트에서 본인이 맡은 역할과 결과를 수치로 정리하면 좋아요.', time: '11.24' }
    ]},
    { id: 4, name: '최유진', role: '보험사 | 상품개발 계리', preview: '통계 역량을 보여주는 게 중요해요.', time: '11.22', unread: 0, favorite: false, messages: [
      { id: 1, from: 'them', text: '통계 관련 프로젝트나 분석 경험을 구체적으로 정리해 보세요.', time: '11.22' }
    ]}
  ]);
  const [communityCategory, setCommunityCategory] = useState('전체');
  const [communityActivity, setCommunityActivity] = useState('게시글');
  const [communitySearch, setCommunitySearch] = useState('');
  const [selectedCommunityPostId, setSelectedCommunityPostId] = useState(null);
  const [communityCommentDraft, setCommunityCommentDraft] = useState('');
  const [communityComments, setCommunityComments] = useState({
    1: [
      { id: 11, author: '취업준비중', role: '경영학과', text: '저는 기업 분석이랑 직무 경험 질문 위주로 준비했어요!', date: '2시간 전', mine: false, likes: 2 },
      { id: 12, author: '오늘도성장', role: '직장인', text: '지원하는 회사의 최근 사업과 인재상을 꼭 확인해 보세요.', date: '1시간 전', mine: false, likes: 4 },
      { id: 13, author: '취뽀하자', role: '생산 신입', text: '답변 감사합니다! 참고해서 준비해 볼게요.', date: '방금 전', mine: true, likes: 0 }
    ],
    2: [
      { id: 21, author: '커리어메이트', role: '취업 준비생', text: '정말 축하드려요! 어떤 부분을 가장 중점적으로 준비하셨나요?', date: '4일 전', mine: false, likes: 3 },
      { id: 22, author: 'Career와 Naw', role: '취업 준비생', text: '직무 분석과 경험 정리를 가장 많이 했어요.', date: '3일 전', mine: true, likes: 1 }
    ],
    3: [
      { id: 31, author: '금융취준생', role: '경영학과', text: '금융권은 경제·경영 기초와 NCS를 같이 준비하면 좋아요.', date: '3시간 전', mine: false, likes: 5 }
    ],
    4: [
      { id: 41, author: '첫출근러', role: '신입사원', text: '출근 동선이랑 복장, 필요한 서류를 미리 확인해 두세요!', date: '어제', mine: false, likes: 2 }
    ]
  });
  const [showPostEditor, setShowPostEditor] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('취업 Q&A');
  const [communityPosts, setCommunityPosts] = useState([
    { id: 1, category: '취업 Q&A', title: '기업 면접 Tip 있나요?', author: '취뽀하자', role: '생산 신입', date: '3일 전', views: 128, comments: 12, likes: 7, content: '면접 준비를 어떻게 하면 좋을까요? 실제 면접 경험이나 준비 팁을 공유해 주세요.', mine: false, liked: false, saved: false, commented: false },
    { id: 2, category: '합격 후기', title: 'CareerNav에서 서합하신 분들!', author: 'Career와 Naw', role: '취업 준비생', date: '5일 전', views: 300, comments: 20, likes: 18, content: '서류 합격 경험과 준비 과정을 함께 나눠요.', mine: false, liked: false, saved: true, commented: true },
    { id: 3, category: '취업 Q&A', title: '금융권 취준 조언 부탁드립니다 ㅠㅠ', author: '취뽀하자', role: '경영 신입', date: '4시간 전', views: 135, comments: 9, likes: 5, content: '금융권 취업을 준비하고 있습니다. 어떤 자격증과 경험을 준비하면 좋을까요?', mine: true, liked: false, saved: false, commented: true },
    { id: 4, category: '직장생활', title: '첫 출근 전에 준비하면 좋은 것들', author: '오늘도성장', role: '직장인', date: '어제', views: 180, comments: 16, likes: 11, content: '첫 출근을 앞두고 준비했던 것들을 정리해 봤어요.', mine: false, liked: true, saved: false, commented: false }
  ]);
  const [noticeCategory, setNoticeCategory] = useState('전체');
  const [inquiryType, setInquiryType] = useState('');
  const [inquiryTitle, setInquiryTitle] = useState('');
  const [inquiryContent, setInquiryContent] = useState('');
  const [inquiryFile, setInquiryFile] = useState(null);
  const [inquiries, setInquiries] = useState([
    { id: 1, title: '로그인 오류 문의', date: '2026. 11. 10', status: '답변 대기', type: '이용/가입' },
    { id: 2, title: '이용 권한 관련 문의', date: '2026. 11. 08', status: '답변 대기', type: '이용/가입' },
    { id: 3, title: '결제 오류 문의', date: '2026. 11. 05', status: '답변 대기', type: '결제/환불' }
  ]);
  const [inquiryFilter, setInquiryFilter] = useState('전체');
  const [openFaq, setOpenFaq] = useState(-1);
  const [faqCategory, setFaqCategory] = useState('전체');
  const [reportType, setReportType] = useState('');
  const [reportTarget, setReportTarget] = useState('');
  const [reportContent, setReportContent] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { from: 'support', text: '고객센터 상담원이에요! 무엇을 도와드릴까요?', time: '10:24' }
  ]);
  const [form, setForm] = useState({
    id: '', name: '', phone: '', birth: '', email: '', password: '',
    passwordConfirm: '', university: '', major: '', grade: '', gpa: '',
    certificates: '', activities: '', volunteering: '', desiredJob: '', desiredCompany: '',
    motivation: '', goal: '', strength: '', salary: '', currentCompany: '',
    previousCompany: '', experience: '', mentoring: '예'
  });

const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));
  const jobs = [
    { id: 1, company: '(주) 삼성전자', title: '마케팅 신입 채용', location: '서울', type: '신입', deadline: 'D-3' },
    { id: 2, company: '(주) SK 하이닉스', title: '반도체 신입 채용', location: '경기', type: '신입', deadline: 'D-20' },
    { id: 3, company: '(주) 삼양식품', title: '영업 관리 인턴', location: '서울', type: '인턴', deadline: 'D-10' }
  ];
  const filteredJobs = jobs.filter(job =>
    `${job.company} ${job.title} ${job.location}`.toLowerCase().includes(search.toLowerCase())
  );
  const toggleSave = id => setSavedJobs(prev =>
    prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
  );
  const Field = ({ label, value, onChange, placeholder = '', type = 'text', required = false }) => (
    <label className="field">
      <span>{label}{required && <b className="required"> *</b>}</span>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </label>
  );
  const goBack = fallback => <button className="back-button" onClick={() => setScreen(fallback)}><ArrowLeft size={20} /> 뒤로</button>;

  const SupportShell = ({ title, children, breadcrumb = 'My Page > 고객센터', backScreen = 'support' }) => (
    <div className="app support-app">
      <header className="top-header">
        <button className="brand" onClick={() => { setScreen('home'); setActiveTab('홈'); }}>
          <span className="brand-symbol small-symbol">↗</span>
          <span>CareerNav<small>커리어 길잡이</small></span>
        </button>
        <button className="notification" onClick={() => alert('새로운 알림이 없습니다.')}><Bell size={21}/></button>
      </header>
      <nav className="category-nav">
        {['필수 스펙','합격자 데이터','AI','비용관리','채용공고'].map(x =>
          <button key={x} onClick={() => { setScreen('home'); setActiveTab(x); }}>{x}</button>
        )}
      </nav>
      <main className="main-content support-content">
        <div className="support-title-row">
          <button className="support-back" onClick={() => setScreen(backScreen)} aria-label="이전 화면으로 돌아가기"><ArrowLeft size={21}/></button>
          <div><div className="support-breadcrumb">{breadcrumb}</div><h1>{title}</h1></div>
        </div>
        {children}
      </main>
      <nav className="bottom-nav">
        {[
          { name: '홈', icon: Home }, { name: '채팅', icon: MessageCircle },
          { name: '커뮤니티', icon: Users }, { name: '이력서', icon: FileText },
          { name: 'MY', icon: UserRound }
        ].map(({name, icon: Icon}) =>
          <button className={name === 'MY' ? 'active' : ''} key={name} onClick={() => {
            setScreen('home'); setActiveTab(name);
          }}><Icon size={20}/><span>{name}</span></button>
        )}
      </nav>
    </div>
  );

  const JobCard = ({ job }) => (
    <article className="job-card">
      <div className="company-logo"><Building2 size={23} /></div>
      <button className="job-info job-info-button" onClick={() => {
        setRecentViewedJobs(prev => [{ ...job, viewedAt: '방금 전' }, ...prev.filter(item => item.id !== job.id)]);
        setScreen('job-detail');
      }}>
        <span className="company-name">{job.company}</span>
        <h3>{job.title}</h3>
        <div className="job-meta"><span><MapPin size={12} /> {job.location}</span><span>{job.type}</span><b>{job.deadline}</b></div>
      </button>
      <button className={`bookmark ${savedJobs.includes(job.id) ? 'saved' : ''}`} onClick={() => toggleSave(job.id)} aria-label="관심 공고 저장">
        <Bookmark size={20} fill={savedJobs.includes(job.id) ? 'currentColor' : 'none'} />
      </button>
    </article>
  );

  const AuthShell = ({ children }) => (
    <div className="auth-shell">
      <div className="auth-brand"><div className="brand-symbol">↗</div><div><strong>CareerNav</strong><small>커리어 길잡이</small></div></div>
      {children}
    </div>
  );

  if (screen === 'splash') return (
    <div className="splash-screen" onClick={() => setScreen('login')}>
      <div className="brand-symbol large">↗</div>
      <h1>CareerNav</h1><p>커리어의 시작, 커리어 길잡이</p>
      <button onClick={() => setScreen('login')}>시작하기 <ArrowRight size={17} /></button>
      <small>화면을 눌러 시작하세요</small>
    </div>
  );

  if (screen === 'login') return (
    <AuthShell>
      <h1>로그인</h1><p className="muted">CareerNav에 오신 것을 환영합니다.</p>
      <Field label="아이디" value={form.id} onChange={v => update('id', v)} placeholder="아이디를 입력하세요" />
      <Field label="비밀번호" value={form.password} onChange={v => update('password', v)} placeholder="비밀번호를 입력하세요" type="password" />
      <label className="remember"><input type="checkbox" /> 아이디 저장</label>
      <button className="primary-button" onClick={() => setScreen('home')}>로그인</button>
      <div className="social-title">소셜 로그인</div>
      <div className="social-row"><button onClick={() => setScreen('home')}>카카오</button><button onClick={() => setScreen('home')}>Google</button><button onClick={() => setScreen('home')}>Naver</button><button onClick={() => setScreen('home')}>Apple</button></div>
      <div className="auth-links">
        <button onClick={() => setScreen('signup')}>회원가입</button>
        <button onClick={() => alert('아이디 찾기는 다음 단계에서 연결합니다.')}>아이디 찾기</button>
        <button onClick={() => alert('비밀번호 찾기는 다음 단계에서 연결합니다.')}>비밀번호 찾기</button>
      </div>
    </AuthShell>
  );

  if (screen === 'signup') return (
    <AuthShell>
      <div className="screen-heading">{goBack('login')}<h1>회원가입</h1><p className="muted">계정 정보를 입력해 주세요.</p></div>
      <Field label="아이디" value={form.id} onChange={v => update('id', v)} placeholder="아이디 입력" required />
      <Field label="이름" value={form.name} onChange={v => update('name', v)} placeholder="이름 입력" required />
      <Field label="전화번호" value={form.phone} onChange={v => update('phone', v)} placeholder="010-0000-0000" required />
      <Field label="생년월일" value={form.birth} onChange={v => update('birth', v)} placeholder="YYYYMMDD" required />
      <Field label="이메일" value={form.email} onChange={v => update('email', v)} placeholder="email@example.com" type="email" required />
      <Field label="비밀번호 (영문·숫자·특수문자 포함)" value={form.password} onChange={v => update('password', v)} type="password" required />
      <Field label="비밀번호 확인" value={form.passwordConfirm} onChange={v => update('passwordConfirm', v)} type="password" required />
      <label className="check-line"><input type="checkbox" required /> 개인정보 수집 및 이용 동의 (필수)</label>
      <label className="check-line"><input type="checkbox" /> 마케팅 수신 동의 (선택)</label>
      <button className="primary-button" onClick={() => {
        if (!form.id || !form.name || !form.phone || !form.email || !form.password) return alert('필수 항목을 입력해 주세요.');
        if (form.password !== form.passwordConfirm) return alert('비밀번호가 일치하지 않습니다.');
        setScreen('role');
      }}>회원가입</button>
    </AuthShell>
  );

  if (screen === 'role') return (
    <AuthShell>
      {goBack('signup')}<h1>어떤 서비스가 필요하신가요?</h1><p className="muted">맞춤형 서비스를 위해 현재 상태를 선택해 주세요.</p>
      <button className={`role-card ${userType === '취업준비생' ? 'selected' : ''}`} onClick={() => setUserType('취업준비생')}><GraduationCap size={36}/><b>취업준비생</b><small>맞춤 커리어 로드맵 및 스펙 진단</small></button>
      <button className={`role-card ${userType === '합격생 / 현직자' ? 'selected' : ''}`} onClick={() => setUserType('합격생 / 현직자')}><BriefcaseBusiness size={36}/><b>합격생 / 현직자</b><small>합격 수기 공유 및 선배 멘토링</small></button>
      <button className="primary-button" disabled={!userType} onClick={() => setScreen(userType === '취업준비생' ? 'student-survey' : 'mentor-survey')}>다음</button>
    </AuthShell>
  );

  if (screen === 'student-survey') return (
    <AuthShell>
      <div className="survey-screen">
        <div className="survey-topline">{goBack('role')}<span>취업준비생 설문조사</span><small>1 / 2</small></div>
        <div className="survey-progress"><span style={{width:'50%'}}/></div>
        <h1>취업준비생 설문조사</h1>
        <p className="muted">맞춤형 커리어 진단을 위해 아래 정보를 입력해 주세요.</p>
        <label className="field"><span>이력서 첨부 <small>(선택)</small></span><input type="file" accept=".pdf,.doc,.docx"/></label>
        <Field label="대학교 / 학교" value={form.university} onChange={v => update('university', v)} placeholder="학교명을 입력해 주세요." required />
        <Field label="학과" value={form.major} onChange={v => update('major', v)} placeholder="학과명을 입력해 주세요." required />
        <Field label="학년" value={form.grade} onChange={v => update('grade', v)} placeholder="예: 2학년" required />
        <Field label="학점 (각 학기별)" value={form.gpa} onChange={v => update('gpa', v)} placeholder="예: 1학기 4.0 / 2학기 4.2" required />
        <Field label="보유 자격증" value={form.certificates} onChange={v => update('certificates', v)} placeholder="보유 자격증을 입력해 주세요." />
        <Field label="대외활동" value={form.activities} onChange={v => update('activities', v)} placeholder="대외활동 및 프로젝트 경험" />
        <Field label="봉사활동" value={form.volunteering} onChange={v => update('volunteering', v)} placeholder="봉사활동 경험 (없으면 없음)" />
        <Field label="희망 직무" value={form.desiredJob} onChange={v => update('desiredJob', v)} placeholder="희망 직무 또는 아직 모르겠음" required />
        <Field label="희망 기업" value={form.desiredCompany} onChange={v => update('desiredCompany', v)} placeholder="희망 기업 또는 아직 모르겠음" required />
        <Field label="자기소개 및 지원동기" value={form.motivation} onChange={v => update('motivation', v)} placeholder="나를 소개하고 지원동기를 작성해 주세요." />
        <Field label="직무를 통해 이루고 싶은 비전" value={form.goal} onChange={v => update('goal', v)} placeholder="직무를 통해 이루고 싶은 목표" />
        <Field label="본인의 강점 및 약점 극복 방법" value={form.strength} onChange={v => update('strength', v)} placeholder="강점과 약점, 극복 방법을 작성해 주세요." />
        <button className="primary-button" onClick={() => setScreen('plan')}>설문 완료하고 다음으로</button>
        <button className="text-button" onClick={() => setScreen('plan')}>나중에 작성하기</button>
      </div>
    </AuthShell>
  );

  if (screen === 'mentor-survey') return (
    <AuthShell>
      <div className="survey-screen">
        <div className="survey-topline">{goBack('role')}<span>합격생 / 현직자 설문</span><small>1 / 2</small></div>
        <div className="survey-progress"><span style={{width:'50%'}}/></div>
        <h1>합격생 / 현직자 스펙 데이터</h1>
        <p className="muted">합격 경험과 경력 정보를 입력해 주세요.</p>
        <Field label="대학교" value={form.university} onChange={v => update('university', v)} placeholder="대학교명을 입력해 주세요." required />
        <Field label="학과" value={form.major} onChange={v => update('major', v)} placeholder="학과명을 입력해 주세요." required />
        <Field label="학점" value={form.gpa} onChange={v => update('gpa', v)} placeholder="예: 4.2 / 4.5" required />
        <label className="field"><span>연봉 (세후) *</span><select value={form.salary} onChange={e => update('salary', e.target.value)} required><option value="">연봉 구간을 선택해 주세요.</option><option>200만원 이하</option><option>201~250만원</option><option>251~300만원</option><option>301~350만원</option><option>351만원 이상</option></select></label>
        <Field label="현재 근무 기업과 부서" value={form.currentCompany} onChange={v => update('currentCompany', v)} placeholder="현재 근무 중이 아니면 해당 없음" required />
        <Field label="합격한 기업과 부서" value={form.previousCompany} onChange={v => update('previousCompany', v)} placeholder="합격한 기업 및 부서 (이직 희망 시 이전 기업)" required />
        <Field label="보유 자격증" value={form.certificates} onChange={v => update('certificates', v)} placeholder="보유 자격증을 입력해 주세요." />
        <Field label="취업 점수 및 취업 후 소감" value={form.experience} onChange={v => update('experience', v)} placeholder="취업 준비 과정과 합격 후기를 작성해 주세요." />
        <Field label="대외활동" value={form.activities} onChange={v => update('activities', v)} placeholder="대외활동 및 프로젝트 경험" />
        <Field label="봉사활동" value={form.volunteering} onChange={v => update('volunteering', v)} placeholder="봉사활동 경험 (없으면 없음)" />
        <label className="field"><span>멘토링에 참여하시겠습니까? *</span><select value={form.mentoring} onChange={e => update('mentoring', e.target.value)}><option>예</option><option>아니요</option></select></label>
        <label className="field"><span>이력서 첨부 <small>(선택)</small></span><input type="file" accept=".pdf,.doc,.docx"/></label>
        <button className="primary-button" onClick={() => setScreen('plan')}>설문 완료하고 다음으로</button>
      </div>
    </AuthShell>
  );

  if (screen === 'plan') return (
    <AuthShell>
      {goBack(userType === '취업준비생' ? 'student-survey' : 'mentor-survey')}<h1>구독료</h1><p className="muted">필요한 서비스를 선택해 주세요.</p>
      {[
        ['Free', '기본 커리어 서비스', '0원'],
        ['Chat', '채팅 업그레이드', '25,000원'],
        ['Plus', 'AI 검색 + AI 면접', '29,000원'],
        ['Pro', 'AI 기능 + 자세한 보고서 + 채팅', '49,000원']
      ].map(([name, desc, price]) => (
        <button key={name} className={`plan-card ${plan === name ? 'selected' : ''}`} onClick={() => setPlan(name)}>
          <span><b>CareerNav {name}</b><small>{desc}</small></span><strong>{price} / 월</strong>
        </button>
      ))}
      <p className="muted tiny">매월 자동 청구되며 언제든지 취소할 수 있습니다.</p>
      <button className="outline-button full" onClick={() => { setPlan('Free'); setScreen('home'); }}>Free 버전 사용하기</button>
      <button className="primary-button" onClick={() => setScreen('payment')}>{plan === 'Free' ? 'Free로 시작하기' : '결제하기'}</button>
    </AuthShell>
  );

  if (screen === 'payment') return (
    <AuthShell>
      {goBack('plan')}<h1>구독료 결제 방식</h1>
      <div className="payment-grid">
        {['간편 결제', '신용 / 체크 카드', '휴대폰 결제', '가상계좌'].map(item => (
          <button className={payment === item ? 'selected' : ''} onClick={() => setPayment(item)} key={item}>{item}</button>
        ))}
      </div>
      <p className="muted">선택한 결제 방식: {payment}</p>
      <label className="check-line"><input type="checkbox" /> 결제 내용을 확인했으며 결제에 동의합니다.</label>
      <button className="primary-button" onClick={() => setScreen(userType === '합격생 / 현직자' ? 'reward' : 'home')}>결제 완료 (시연용)</button>
      <p className="tiny muted">실제 결제는 PG사 연동이 필요합니다.</p>
    </AuthShell>
  );

  if (screen === 'reward') return (
    <AuthShell>
      {goBack('payment')}<h1>리워드 받을 방식 선택</h1>
      <div className="plan-card"><b>모바일 기프티콘</b><small>등록한 휴대폰 번호로 발송됩니다.</small></div>
      <Field label="휴대폰 번호" value={form.phone} onChange={v => update('phone', v)} placeholder="010-0000-0000" required />
      <Field label="배송 주소 (선택)" value={form.experience} onChange={v => update('experience', v)} placeholder="주소를 입력하세요" />
      <button className="primary-button" onClick={() => setScreen('home')}>확인</button>
    </AuthShell>
  );

  if (screen === 'settings') return (
    <AuthShell>
      <div className="screen-heading">{goBack('login')}<h1>설정</h1><p className="muted">CareerNav 이용 환경을 관리하세요.</p></div>
      <button className="feature-row" onClick={() => setScreen('member-info')}>회원정보관리<ChevronRight /></button>
      <button className="feature-row" onClick={() => alert('알림 설정은 다음 개발 단계에서 연결합니다.')}>알림 설정<ChevronRight /></button>
      <button className="feature-row" onClick={() => alert('개인정보 처리 설정은 다음 개발 단계에서 연결합니다.')}>개인정보 처리<ChevronRight /></button>
      <button className="feature-row" onClick={() => alert('고객센터 기능은 다음 개발 단계에서 연결합니다.')}>고객센터<ChevronRight /></button>
    </AuthShell>
  );

  if (screen === 'member-info') return (
    <AuthShell>
      <div className="screen-heading">{goBack('settings')}<h1>회원정보관리</h1><p className="muted">내 회원정보를 확인하고 수정할 수 있습니다.</p></div>
      <Field label="아이디" value={form.id} onChange={v => update('id', v)} placeholder="아이디" />
      <Field label="이름" value={form.name} onChange={v => update('name', v)} placeholder="이름" />
      <Field label="휴대폰 번호" value={form.phone} onChange={v => update('phone', v)} placeholder="010-0000-0000" />
      <Field label="이메일" value={form.email} onChange={v => update('email', v)} placeholder="email@example.com" type="email" />
      <Field label="생년월일" value={form.birth} onChange={v => update('birth', v)} placeholder="YYYYMMDD" />
      <button className="primary-button" onClick={() => alert('입력한 정보가 화면에 반영되었습니다. 실제 계정 저장은 Supabase 연동 후 가능합니다.')}>회원정보 저장</button>
      <button className="outline-button full" onClick={() => alert('비밀번호 변경 기능은 Supabase Auth 연동 후 연결할 수 있습니다.')}>비밀번호 변경</button>
      <p className="tiny muted">현재는 화면 시연용이며, 실제 계정 정보 저장 및 비밀번호 변경은 아직 연결되지 않았습니다.</p>
    </AuthShell>
  );


  if (screen === 'application-status') {
    const applications = [
      { id: 1, company: '(주) 금융IT', title: '기업금융IT 직무', date: '2026. 11. 01', status: '서류 합격', detail: '면접 대기', action: 'AI 면접 보러가기' },
      { id: 2, company: '(주) 경영회계', title: '경영·회계 사무', date: '2026. 10. 20', status: '서류 검토 중', detail: '진행 중' },
      { id: 3, company: '(주) 품질생산', title: '품질 / 생산 관리', date: '2026. 10. 15', status: '서류 검토 중', detail: '진행 중' },
      { id: 4, company: '(주) 마케팅', title: '기업 마케팅 직무', date: '2026. 09. 15', status: '불합격', detail: '완료' }
    ];
    const visibleApplications = applications.filter(item =>
      applicationFilter === '전체' ||
      (applicationFilter === '진행 중' ? item.detail === '진행 중' || item.detail === '면접 대기' : item.detail === '완료')
    );
    return (
      <SupportShell title="지원 현황" breadcrumb="My Page > 지원 현황" backScreen="home">
        <div className="application-filter-row">
          {['전체', '진행 중', '완료'].map((item, index) => (
            <button key={item} className={applicationFilter === item ? 'selected' : ''} onClick={() => setApplicationFilter(item)}>
              {item} ({[4, 3, 1][index]})
            </button>
          ))}
        </div>
        <div className="application-list">
          {visibleApplications.map(item => (
            <article className="application-card" key={item.id}>
              <div className="application-card-top">
                <div><b>{item.company}</b><h3>{item.title}</h3><small>지원일: {item.date}</small></div>
                <span className={`application-status ${item.detail === '완료' ? 'done' : 'progress'}`}>{item.status}</span>
              </div>
              {item.action && <button className="application-action" onClick={() => alert('AI 면접 화면은 다음 단계에서 연결할 예정입니다.')}>{item.action} <ArrowRight size={15}/></button>}
            </article>
          ))}
        </div>
      </SupportShell>
    );
  }

  if (screen === 'recent-jobs') return (
    <SupportShell title="최근 본 공고" breadcrumb="My Page > 최근 본 공고" backScreen="home">
      <div className="recent-jobs-heading"><b>최근 확인한 채용공고</b><span>{recentViewedJobs.length}건</span></div>
      {recentViewedJobs.length ? recentViewedJobs.map(job => (
        <article className="recent-job-card" key={job.id}>
          <div className="recent-job-top"><span>{job.company}</span><small>{job.viewedAt}</small></div>
          <h3>{job.title}</h3>
          <div className="job-meta"><span><MapPin size={12}/> {job.location}</span><span>{job.type}</span><b>{job.deadline}</b></div>
          <button className="recent-job-open" onClick={() => alert(`${job.company} · ${job.title}\n공고 상세 화면은 다음 단계에서 연결합니다.`)}>공고 자세히 보기 <ChevronRight size={16}/></button>
        </article>
      )) : <div className="empty-card">최근 본 공고가 없습니다.</div>}
    </SupportShell>
  );

  if (screen === 'job-detail') {
    const currentJob = recentViewedJobs[0];
    return (
      <SupportShell title="채용공고 상세" breadcrumb="채용공고 > 상세" backScreen="home">
        <article className="recent-job-card">
          <span className="company-name">{currentJob?.company}</span>
          <h2>{currentJob?.title}</h2>
          <div className="job-meta"><span><MapPin size={12}/> {currentJob?.location}</span><span>{currentJob?.type}</span><b>{currentJob?.deadline}</b></div>
          <p className="muted">채용 분야와 지원 조건을 확인하고 지원을 준비해 보세요.</p>
          <button className="primary-button" onClick={() => alert('지원 기능은 다음 단계에서 연결합니다.')}>지원하기</button>
        </article>
      </SupportShell>
    );
  }

  if (screen === 'subscription-status') return (
    <SupportShell title="구독현황" breadcrumb="My Page > 구독현황" backScreen="home">
      <section className="subscription-status-view">
        <h2>현재 나의 구독 현황</h2>
        <div className="subscription-plan-list">
          {[
            { name: 'Chat', price: '25,000원', description: '커리어냅 Chat은 채팅 기능을 사용할 수 있습니다.' },
            { name: 'Plus', price: '29,000원', description: '커리어냅 Plus는 AI 검색과 AI 면접을 사용할 수 있습니다.' },
            { name: 'Pro', price: '49,000원', description: '커리어냅 Pro는 채팅 기능과 AI 검색, AI 면접을 모두 사용할 수 있습니다.' },
            { name: 'Free', price: '0원', description: '커리어냅 Free는 채팅 기능, AI 검색, AI 면접 기능을 제외하고 이용이 가능합니다.' }
          ].map(item => (
            <article className={`subscription-plan-card ${plan === item.name ? 'current' : ''}`} key={item.name}>
              <div className="subscription-plan-name"><span>CareerNav</span><strong>{item.name}</strong></div>
              <p>{item.description}</p>
              <b className="subscription-price">{item.price}</b>
              {plan === item.name && <span className="current-plan-label"><CheckCircle2 size={14}/> 현재 이용 중</span>}
            </article>
          ))}
        </div>
        <div className="subscription-actions">
          <button className="subscription-change-button" onClick={() => setScreen('plan')}>구독 변경하기</button>
          <button className="subscription-payment-button" onClick={() => setScreen('payment')}>결제 방식 변경</button>
        </div>
        <p className="subscription-note">현재 구독: CareerNav {plan} · 결제 방식: {payment}</p>
      </section>
    </SupportShell>
  );


  const supportMenu = [
    { label: '공지사항', icon: Megaphone, screen: 'support-notices' },
    { label: '1:1 문의하기', icon: MessageCircle, screen: 'support-inquiry' },
    { label: '문의내역', icon: ListChecks, screen: 'support-history' },
    { label: '자주 묻는 질문 (FAQ)', icon: CircleHelp, screen: 'support-faq' },
    { label: '이벤트 · 혜택', icon: Gift, screen: 'support-events' },
    { label: '신고하기', icon: TriangleAlert, screen: 'support-report' },
    { label: '실시간 채팅 상담', icon: Headphones, screen: 'support-chat' },
    { label: '서비스 이용약관', icon: ShieldCheck, screen: 'support-terms' },
    { label: '개인정보 처리방침', icon: UserRound, screen: 'support-privacy' }
  ];

  const faqs = [
    { category: '이용/가입', q: '회원가입은 어떻게 하나요?', a: '회원가입 화면에서 아이디, 이름, 연락처와 이메일 등 필수 정보를 입력한 뒤 가입을 진행해 주세요.' },
    { category: '이용/가입', q: '비밀번호를 잊어버렸어요.', a: '로그인 화면의 비밀번호 찾기를 이용해 주세요. 실제 비밀번호 재설정은 계정 인증 기능 연결 후 제공됩니다.' },
    { category: '결제/환불', q: '결제 수단은 어떤 게 있나요?', a: '카드, 간편결제, 휴대폰 결제 및 가상계좌 등 화면에 표시된 결제 수단을 선택할 수 있습니다.' },
    { category: '결제/환불', q: '환불은 어떻게 하나요?', a: '결제 내역과 환불 사유를 확인한 뒤 1:1 문의하기로 접수해 주세요.' },
    { category: '기타', q: '계정 비활성화는 어떻게 하나요?', a: '회원정보관리 또는 고객센터 문의를 통해 계정 관련 도움을 받을 수 있습니다.' }
  ];

  if (screen === 'support') return (
    <SupportShell title="고객센터">
      <div className="support-menu-list">
        {supportMenu.map(({label, icon: Icon, screen: target}) => (
          <button className="support-menu-item" key={label} onClick={() => setScreen(target)}>
            <span>{label}</span><ChevronRight className="support-menu-arrow" size={20}/>
          </button>
        ))}
      </div>
    </SupportShell>
  );

  if (screen === 'support-notices') return (
    <SupportShell title="공지사항">
      <div className="support-tabs">
        {['전체','서비스 안내','업데이트'].map(x => <button key={x} className={noticeCategory === x ? 'selected' : ''} onClick={() => setNoticeCategory(x)}>{x}</button>)}
      </div>
      <div className="support-list">
        {[
          ['[안내] 서비스 점검 안내','2026. 11. 10','전체'],
          ['[안내] 개인정보 처리방침 변경','2026. 11. 07','서비스 안내'],
          ['[이벤트] 11월 이벤트 안내','2026. 11. 03','전체'],
          ['[업데이트] v2.3.0 업데이트','2026. 10. 28','업데이트']
        ].filter(item => noticeCategory === '전체' || item[2] === noticeCategory).map((item, i) => (
          <button className="support-notice-row" key={i} onClick={() => alert(`${item[0]}\\n\\n공지사항 상세 내용은 서비스 운영 시 등록됩니다.`)}>
            <span><b>{item[0]}</b><small>{item[1]}</small></span><ChevronRight size={19}/>
          </button>
        ))}
      </div>
    </SupportShell>
  );

  if (screen === 'support-inquiry') return (
    <SupportShell title="1:1 문의하기">
      <div className="support-form">
        <label className="field"><span>문의 유형 <b className="required">*</b></span>
          <select value={inquiryType} onChange={e => setInquiryType(e.target.value)}>
            <option value="">선택해 주세요.</option><option>이용/가입</option><option>결제/환불</option><option>기타</option>
          </select>
        </label>
        <Field label="제목" value={inquiryTitle} onChange={setInquiryTitle} placeholder="문의 제목을 입력해 주세요." required/>
        <label className="field"><span>문의 내용 <b className="required">*</b></span>
          <textarea rows="6" value={inquiryContent} onChange={e => setInquiryContent(e.target.value)} placeholder="문의하실 내용을 입력해 주세요."/>
        </label>
        <label className="support-file"><Paperclip size={18}/><span>파일 첨부 (최대 10MB)</span><input type="file" onChange={e => {
          const file = e.target.files?.[0];
          if (file && file.size > 10 * 1024 * 1024) { alert('파일은 최대 10MB까지 첨부할 수 있습니다.'); e.target.value = ''; setInquiryFile(null); }
          else setInquiryFile(file || null);
        }}/></label>
        {inquiryFile && <p className="support-file-name">{inquiryFile.name}</p>}
        <button className="primary-button" onClick={() => {
          if (!inquiryType || !inquiryTitle.trim() || !inquiryContent.trim()) return alert('필수 항목을 입력해 주세요.');
          setInquiries(prev => [{ id: Date.now(), title: inquiryTitle, date: new Date().toLocaleDateString('ko-KR'), status: '답변 대기', type: inquiryType }, ...prev]);
          setInquiryTitle(''); setInquiryContent(''); setInquiryType(''); setInquiryFile(null);
          alert('문의가 접수되었습니다. 문의내역에서 확인할 수 있습니다.');
          setScreen('support-history');
        }}>문의 등록</button>
      </div>
    </SupportShell>
  );

  if (screen === 'support-history') {
    const filteredInquiries = inquiries.filter(item => inquiryFilter === '전체' || item.status === inquiryFilter);
    return (
      <SupportShell title="문의내역">
        <div className="support-tabs">
          {['전체','답변 대기','답변 완료'].map(x => <button key={x} className={inquiryFilter === x ? 'selected' : ''} onClick={() => setInquiryFilter(x)}>{x}</button>)}
        </div>
        <div className="support-list">
          {filteredInquiries.map(item => (
            <article className="support-history-card" key={item.id}>
              <div><b>{item.title}</b><small>{item.date}</small></div>
              <span className={`status-pill ${item.status === '답변 완료' ? 'done' : ''}`}>{item.status}</span>
              <ChevronRight size={18}/>
            </article>
          ))}
          {!filteredInquiries.length && <div className="support-empty">문의내역이 없습니다.</div>}
        </div>
      </SupportShell>
    );
  }

  if (screen === 'support-faq') return (
    <SupportShell title="자주 묻는 질문 (FAQ)">
      <div className="support-tabs faq-tabs">
        {['전체','이용/가입','결제/환불','기타'].map(x => <button key={x} className={faqCategory === x ? 'selected' : ''} onClick={() => {setFaqCategory(x);setOpenFaq(-1);}}>{x}</button>)}
      </div>
      <div className="faq-list">
        {faqs.filter(item => faqCategory === '전체' || item.category === faqCategory).map((item) => {
          const index = faqs.indexOf(item);
          return <button className={`faq-item ${openFaq === index ? 'open' : ''}`} key={item.q} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
            <span><b>Q.</b> {item.q}</span><ChevronDown size={19}/>
            {openFaq === index && <p>{item.a}</p>}
          </button>;
        })}
      </div>
    </SupportShell>
  );

  if (screen === 'support-events') return (
    <SupportShell title="이벤트 · 혜택">
      <div className="support-tabs">
        <button className="selected">진행 중</button><button onClick={() => alert('종료된 이벤트가 없습니다.')}>종료된 이벤트</button>
      </div>
      <div className="event-card"><Gift size={34}/><div><b>11월 출석체크 이벤트!</b><small>2026. 11. 01 ~ 11. 30</small></div><ChevronRight/></div>
      <div className="event-card"><div className="coupon-icon">%</div><div><b>신규 가입 혜택!</b><small>2026. 11. 01 ~ 11. 30</small></div><ChevronRight/></div>
    </SupportShell>
  );

  if (screen === 'support-report') return (
    <SupportShell title="신고하기">
      <div className="support-form">
        <label className="field"><span>신고 유형 <b className="required">*</b></span><select value={reportType} onChange={e => setReportType(e.target.value)}><option value="">선택해 주세요.</option><option>게시글 신고</option><option>댓글 신고</option><option>사용자 신고</option><option>기타</option></select></label>
        <label className="field"><span>신고 대상 <b className="required">*</b></span><select value={reportTarget} onChange={e => setReportTarget(e.target.value)}><option value="">선택해 주세요.</option><option>커뮤니티 게시글</option><option>댓글</option><option>회원</option><option>기타</option></select></label>
        <label className="field"><span>신고 내용 <b className="required">*</b></span><textarea rows="6" value={reportContent} onChange={e => setReportContent(e.target.value)} placeholder="신고하실 내용을 입력해 주세요."/></label>
        <button className="primary-button" onClick={() => {
          if (!reportType || !reportTarget || !reportContent.trim()) return alert('필수 항목을 입력해 주세요.');
          alert('신고가 접수되었습니다. (시연용)');
          setReportType(''); setReportTarget(''); setReportContent('');
        }}>신고하기</button>
      </div>
    </SupportShell>
  );

  if (screen === 'support-chat') return (
    <SupportShell title="실시간 채팅 상담">
      <div className="support-chat-window">
        {chatMessages.map((message, i) => <div className={`chat-line ${message.from === 'me' ? 'mine' : ''}`} key={i}>
          {message.from === 'support' && <div className="chat-avatar"><Headphones size={19}/></div>}
          <div><div className="chat-bubble">{message.text}</div><small>{message.time}</small></div>
        </div>)}
      </div>
      <form className="support-chat-compose" onSubmit={e => {
        e.preventDefault();
        if (!chatInput.trim()) return;
        setChatMessages(prev => [...prev, { from: 'me', text: chatInput.trim(), time: new Date().toLocaleTimeString('ko-KR', {hour:'2-digit',minute:'2-digit'}) }]);
        setChatInput('');
      }}>
        <input value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="메시지를 입력해 주세요."/>
        <button type="submit" aria-label="메시지 보내기"><Send size={20}/></button>
      </form>
      <p className="tiny muted">현재 채팅은 화면 시연용이며 상담원과 연결되지는 않습니다.</p>
    </SupportShell>
  );

  if (screen === 'support-terms') return (
    <SupportShell title="서비스 이용약관">
      <article className="legal-copy">
        <h3>제1조 (목적)</h3><p>본 약관은 CareerNav가 제공하는 커리어 로드맵 및 멘토링 플랫폼 서비스 이용에 관한 회사와 회원 간의 권리와 의무를 규정함을 목적으로 합니다.</p>
        <h3>제2조 (정의)</h3><p>① 서비스란 회사가 제공하는 커리어 정보, 채용정보 및 멘토링 관련 기능을 의미합니다.</p><p>② 회원이란 본 약관에 동의하고 가입한 이용자를 의미합니다.</p>
        <h3>제3조 (이용계약의 성립)</h3><p>이용계약은 가입 신청자가 약관에 동의한 후 회원가입을 신청하고 회사가 이를 승낙함으로써 성립됩니다.</p>
      </article>
      <p className="tiny muted">※ 프로젝트 시연용 약관 예시입니다. 실제 서비스 운영 전 법률 검토가 필요합니다.</p>
    </SupportShell>
  );

  if (screen === 'support-privacy') return (
    <SupportShell title="개인정보 처리방침">
      <article className="legal-copy">
        <h3>제1조 (개인정보의 수집 및 이용목적)</h3><p>회사는 회원가입 관리, 맞춤형 커리어 로드맵 제공 및 멘토링 매칭을 목적으로 개인정보를 처리합니다.</p>
        <h3>제2조 (수집하는 개인정보 항목)</h3><p>① 필수항목: 이름, 이메일, 휴대폰 번호, 연락처, 학력 및 학교·전공 정보</p><p>② 선택항목: 희망 직무, 자격증, 어학 성적, 이력서 정보</p>
        <h3>제3조 (개인정보의 보유 및 이용기간)</h3><p>수집된 개인정보는 원칙적으로 회원 탈퇴 시 지체 없이 파기하며, 관계 법령에 따른 보존 기간 동안만 보관합니다.</p>
      </article>
      <p className="tiny muted">※ 프로젝트 시연용 개인정보 처리방침 예시입니다. 실제 수집 항목과 처리 방식에 맞춰 수정해야 합니다.</p>
    </SupportShell>
  );

  const tabs = [
    { name: '홈', icon: Home }, { name: '채팅', icon: MessageCircle },
    { name: '커뮤니티', icon: Users }, { name: '이력서', icon: FileText },
    { name: 'MY', icon: UserRound }
  ];
  const renderMain = () => {
    if (activeTab === '채용공고') return (
      <>
        <div className="page-heading"><span className="eyebrow">FIND YOUR JOB</span><h1>채용공고</h1><p>조건에 맞는 채용 기회를 찾아보세요.</p></div>
        <div className="search-box"><Search size={18}/><input placeholder="기업명, 직무, 지역 검색" value={search} onChange={e => setSearch(e.target.value)}/></div>
        <div className="filter-chips">{['전체','서울','신입','인턴'].map(x => <button key={x} onClick={() => setSearch(x === '전체' ? '' : x)}>{x}</button>)}</div>
        <SectionTitle title={`채용공고 ${filteredJobs.length}건`}/>
        {filteredJobs.map(job => <JobCard key={job.id} job={job}/>)}
      </>
    );
    if (activeTab === '필수 스펙') {
      const specData = {
        '사업관리': [
          { role: '경영기획', required: ['경영학·산업공학 등 관련 전공 지식', '엑셀 및 데이터 정리 능력'], preferred: ['경영·기획 관련 인턴 경험', '컴퓨터활용능력 1급', '프로젝트 기획 경험'] },
          { role: '인사·총무', required: ['인사·노무 기초 지식', '문서 작성 및 커뮤니케이션 능력'], preferred: ['ERP 인사정보관리사', '전산회계 자격증', '인사·총무 실무 경험'] },
          { role: '사업운영', required: ['사업 운영 프로세스 이해', '문서 및 일정 관리 능력'], preferred: ['프로젝트 운영 경험', '데이터 분석 및 보고서 작성 경험'] }
        ],
        '경영·회계사무': [
          { role: '회계·재무', required: ['회계원리 및 재무제표 이해', '엑셀 활용 능력'], preferred: ['전산회계 1급', '전산세무 2급', '재경관리사'] },
          { role: '세무', required: ['세법 및 세무회계 기초 지식', '증빙·자료 관리 능력'], preferred: ['전산세무 1·2급', '세무사 시험 준비 경험'] },
          { role: '사무행정', required: ['문서 작성 및 OA 활용 능력', '자료 관리 능력'], preferred: ['컴퓨터활용능력 1급', '워드프로세서', '공공기관 행정 경험'] }
        ],
        '금융·보험': [
          { role: '금융공기업·일반행정', required: ['NCS 및 전공 기초(경영·경제·법)', '문서 작성 및 자료 분석 능력'], preferred: ['한국사능력검정시험', '컴퓨터활용능력 1급', '인턴·대외활동 경험'] },
          { role: '투자·자산운용', required: ['금융시장 및 투자상품 이해', '재무제표·경제지표 분석 능력'], preferred: ['투자자산운용사', 'CFA', 'CFP', 'FRM'] },
          { role: '보험·금융영업', required: ['보험·금융상품 이해', '고객 상담 및 의사소통 능력'], preferred: ['생명보험·손해보험·제3보험 설계사 자격', '변액보험판매관리사'] }
        ],
        '교육': [
          { role: '교육기획·운영', required: ['교육과정 및 학습자 이해', '운영·일정 관리 능력'], preferred: ['평생교육사', '교육 프로그램 운영 경험'] },
          { role: '강사·교수설계', required: ['담당 분야 전문지식', '강의 및 콘텐츠 구성 능력'], preferred: ['교원자격증(해당 직무)', '강의·튜터링 경험'] }
        ],
        '법률': [
          { role: '법률사무', required: ['민법·형법 등 법률 기초 지식', '문서 검토 및 작성 능력'], preferred: ['법률사무 관련 교육', '법률사무소 실무 경험'] },
          { role: '컴플라이언스', required: ['법령·내부 규정 이해', '리스크 점검 및 보고 능력'], preferred: ['준법·내부통제 관련 경험', '금융·법률 관련 자격'] }
        ],
        '보건의료': [
          { role: '간호', required: ['간호사 면허(해당 직무 필수)', '임상 지식'], preferred: ['임상 경력', 'BLS 등 관련 교육 이수'] },
          { role: '보건행정', required: ['보건의료 제도 및 행정 이해', '문서·자료 관리 능력'], preferred: ['보건의료정보관리사', '병원 행정 경험'] }
        ],
        '영업·판매': [
          { role: '영업관리', required: ['고객·매출 데이터 관리 능력', '협상 및 커뮤니케이션 능력'], preferred: ['엑셀·CRM 활용', '영업 인턴 경험'] },
          { role: '마케팅·판매기획', required: ['시장 및 고객 분석 능력', '콘텐츠 기획 능력'], preferred: ['GA4·검색광고 관련 교육', '마케팅 프로젝트 포트폴리오'] }
        ],
        '건설': [
          { role: '건축·시공', required: ['건축·시공 관련 전공지식', '도면 및 공정 이해'], preferred: ['건축기사', '건설안전기사', '현장 실습 경험'] },
          { role: '안전관리', required: ['산업안전 및 안전관리 기준 이해'], preferred: ['산업안전기사', '건설안전기사'] }
        ],
        '기계': [
          { role: '기계설계', required: ['기계요소·재료역학 기초', 'CAD 도면 해독 능력'], preferred: ['일반기계기사', '전산응용기계제도기능사', 'CAD 포트폴리오'] },
          { role: '생산·품질관리', required: ['생산공정 및 품질관리 기초', '데이터 분석 능력'], preferred: ['품질경영기사', '산업안전기사', '6시그마 교육'] }
        ],
        '전기·전자': [
          { role: '전기설비', required: ['전기회로 및 전력설비 기초', '안전 기준 이해'], preferred: ['전기기사', '전기산업기사'] },
          { role: '전자·반도체', required: ['전자회로 및 반도체 공정 기초', '데이터 분석 능력'], preferred: ['전자기사', '반도체 관련 교육·프로젝트'] }
        ],
        '정보통신': [
          { role: '소프트웨어 개발', required: ['프로그래밍 및 자료구조 기초', 'Git 등 협업 도구 활용'], preferred: ['정보처리기사·산업기사', '개발 프로젝트 포트폴리오'] },
          { role: '데이터 분석', required: ['통계 및 데이터 전처리 기초', 'SQL·Python 활용 능력'], preferred: ['SQLD', 'ADsP', '빅데이터분석기사', '분석 프로젝트'] },
          { role: '정보보안·네트워크', required: ['네트워크 및 운영체제 기초', '보안 개념 이해'], preferred: ['정보보안기사', '네트워크관리사'] }
        ],
        '화학·바이오': [
          { role: '화학·공정', required: ['화학 및 공정 기초 지식', '실험·안전 기준 이해'], preferred: ['화공기사', '위험물산업기사'] },
          { role: '바이오·품질', required: ['생명과학 및 실험 기초', '품질 문서 관리 능력'], preferred: ['바이오화학제품제조기사', 'GMP 교육'] }
        ],
        '문화·예술': [
          { role: '디자인', required: ['디자인 툴 활용 능력', '작업물 포트폴리오'], preferred: ['그래픽기술자격(GTQ)', 'UX/UI 프로젝트'] },
          { role: '콘텐츠·영상', required: ['콘텐츠 기획 및 편집 능력', '포트폴리오'], preferred: ['영상 편집 툴 활용', 'SNS 채널 운영 경험'] }
        ],
        '식품가공': [
          { role: '식품품질관리', required: ['식품위생 및 품질관리 기초', '위생·안전 기준 이해'], preferred: ['식품기사', '위생사'] },
          { role: '식품생산관리', required: ['식품 제조공정 이해', '생산 및 재고 관리 능력'], preferred: ['식품산업기사', '품질경영 관련 자격'] }
        ]
      };
      const fields = Object.keys(specData);
      const currentRoles = selectedSpecField ? specData[selectedSpecField] || [] : [];
      const currentRole = currentRoles.find(item => item.role === selectedSpecRole);
      return <section className="spec-page">
        <div className="page-heading"><h1>직무별 필수 스펙</h1><p>관심 분야를 선택하면 세부 직무와 준비해야 할 스펙을 확인할 수 있어요.</p></div>
        <div className="spec-step-heading"><b>1. 관심 분야 선택</b><span>분야를 눌러주세요</span></div>
        <div className="spec-field-grid">
          {fields.map(field => <button key={field} className={selectedSpecField === field ? 'selected' : ''} onClick={() => { setSelectedSpecField(field); setSelectedSpecRole(''); }}>
            <span>{field}</span><ChevronRight size={16}/>
          </button>)}
        </div>
        {selectedSpecField && <>
          <div className="spec-step-heading spec-sub-heading"><b>2. 세부 직무 선택</b><span>{selectedSpecField}</span></div>
          <div className="spec-role-list">
            {currentRoles.map(item => <button key={item.role} className={selectedSpecRole === item.role ? 'selected' : ''} onClick={() => setSelectedSpecRole(item.role)}>
              {item.role}<ChevronRight size={16}/>
            </button>)}
          </div>
        </>}
        {currentRole && <div className="spec-detail-card">
          <div className="spec-detail-title"><div><span>{selectedSpecField}</span><h2>{currentRole.role}</h2></div><span className="spec-info-label">직무 준비 정보</span></div>
          <div className="spec-detail-section"><h3><CheckCircle2 size={17}/> 필수 준비 사항</h3><ul>{currentRole.required.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div className="spec-detail-section preferred"><h3><Target size={17}/> 우대·추천 스펙</h3><ul>{currentRole.preferred.map(item => <li key={item}>{item}</li>)}</ul></div>
          <p className="spec-disclaimer">※ 직무별 일반적인 준비 항목 예시이며, 실제 필수·우대 조건은 기업별 채용공고를 확인해 주세요.</p>
        </div>}
      </section>;
    }
    if (activeTab === '합격자 데이터') {
      const successfulProfiles = [
        { id: 1, name: '정윤우', company: '금융공기업', job: '일반행정', match: 99, university: 'I대학교', major: '경영학과', gpa: '4.2 / 4.5', certificates: ['컴퓨터활용능력 1급','한국사능력검정 1급','신용분석사','빅데이터분석기사'], activities: ['금융감독원 대학생 금융교육 서포터즈'], career: '한국자산관리공사 체험형 인턴 16개월 (행정 지원)', story: '대학생 때부터 금융·행정 분야의 경험을 쌓고, 공공기관 인턴 경험과 자격증 준비를 병행해 금융공기업 일반행정 직무에 합격했습니다.' },
        { id: 2, name: '이지원', company: '증권사', job: '리서치 IB', match: 95, university: 'S대학교', major: '경제학과', gpa: '4.1 / 4.5', certificates: ['투자자산운용사','SQLD'], activities: ['투자대회 수상','기업분석 포트폴리오'], career: '금융 리서치 프로젝트 및 기업분석 경험', story: '투자대회 수상 경험과 기업분석 포트폴리오를 바탕으로 대형 증권사 리서치 직무에 합격했습니다.' },
        { id: 3, name: '박서준', company: '인터넷은행', job: '데이터 리스크', match: 81, university: 'K대학교', major: '통계학과', gpa: '3.9 / 4.5', certificates: ['SQLD','ADsP','빅데이터분석기사'], activities: ['금융 데이터 분석 프로젝트'], career: '파이썬 기반 데이터 분석 프로젝트', story: '파이썬 프로젝트와 데이터 분석 포트폴리오를 통해 비전공자 한계를 극복하고 핀테크 기업에 합격했습니다.' },
        { id: 4, name: '최유진', company: '보험사', job: '상품개발·계리', match: 84, university: 'Y대학교', major: '수학과', gpa: '4.0 / 4.5', certificates: ['보험계리사 1차 합격'], activities: ['통계 및 보험 관련 프로젝트'], career: '보험 상품 분석 프로젝트', story: '계리사 1차 합격과 통계 역량을 바탕으로 보험사 본사에 입사했습니다.' },
        { id: 5, name: '김민수', company: '시중은행', job: '기업금융', match: 74, university: 'H대학교', major: '경영학과', gpa: '3.8 / 4.5', certificates: ['은행FP','신용분석사'], activities: ['금융권 취업 스터디'], career: '은행 관련 직무 프로젝트', story: '무스펙·노인턴에서 시작해 금융 자격증과 직무 준비를 꾸준히 하여 시중은행 기업금융 직무에 합격했습니다.' }
      ];
      const selectedProfile = successfulProfiles.find(profile => profile.id === selectedSuccessId);
      if (selectedProfile && mentorApplyOpen) return <section className="success-data-page mentor-apply-page">
        <div className="success-detail-header"><button onClick={() => setMentorApplyOpen(false)}><ArrowLeft size={19}/> 멘토 프로필</button></div>
        <div className="mentor-apply-card">
          <div className="mentor-apply-profile"><div className="success-profile-avatar"><UserRound size={27}/></div><div><span>{selectedProfile.company} | {selectedProfile.job}</span><h2>{selectedProfile.name} 멘토</h2><small>내 프로필과 {selectedProfile.match}% 일치</small></div></div>
          <div className="mentor-apply-heading"><h2>멘토링 신청</h2><p>멘토에게 상담 목적과 궁금한 내용을 전달해 주세요.</p></div>
          <label className="mentor-form-field"><span>멘토링 주제</span><select value={mentorApplyPurpose} onChange={e => setMentorApplyPurpose(e.target.value)}><option>직무 및 취업 준비 상담</option><option>이력서·자기소개서 피드백</option><option>면접 준비 및 답변 피드백</option><option>자격증·스펙 준비 상담</option><option>현직자 업무 및 커리어 상담</option></select></label>
          <label className="mentor-form-field"><span>희망 상담 방식</span><div className="mentor-method-options">{['채팅','화상 상담'].map(method => <button type="button" className={mentorApplyMethod===method?'active':''} onClick={() => setMentorApplyMethod(method)} key={method}>{method}</button>)}</div></label>
          <label className="mentor-form-field"><span>희망 상담 날짜</span><input type="date" value={mentorApplyDate} onChange={e => setMentorApplyDate(e.target.value)}/></label>
          <label className="mentor-form-field"><span>희망 상담 시간</span><select value={mentorApplyTime} onChange={e => setMentorApplyTime(e.target.value)}>{['오전 10시','오후 1시','오후 3시','오후 7시','오후 8시'].map(time => <option key={time}>{time}</option>)}</select></label>
          <label className="mentor-form-field"><span>멘토에게 전달할 내용</span><textarea rows="5" value={mentorApplyMessage} onChange={e => setMentorApplyMessage(e.target.value)} placeholder="현재 준비 중인 직무와 궁금한 점을 작성해 주세요."/></label>
          <div className="mentor-apply-notice"><ShieldCheck size={16}/><span>신청 후 멘토가 확인하면 채팅을 통해 일정을 조율할 수 있어요.</span></div>
          <button className="primary-button" disabled={!mentorApplyDate || !mentorApplyMessage.trim()} onClick={() => { setMentorApplications(prev => [...prev, { id: Date.now(), mentor: selectedProfile.name, purpose: mentorApplyPurpose, method: mentorApplyMethod, date: mentorApplyDate, time: mentorApplyTime, message: mentorApplyMessage, status: '신청 대기' }]); setMentorApplyOpen(false); alert(`${selectedProfile.name} 멘토에게 신청을 보냈습니다. 현재 시연용으로 신청 내역은 화면 상태에만 저장됩니다.`); }}>멘토링 신청 보내기</button>
          <p className="mentor-apply-footnote">※ 현재 신청은 시연용으로 브라우저 화면 상태에만 저장되며, 실제 멘토 알림 및 일정 확정은 서버 연동 후 이용할 수 있습니다.</p>
        </div>
      </section>;
      if (selectedProfile) return <section className="success-data-page">
        <div className="success-detail-header"><button onClick={() => setSelectedSuccessId(null)}><ArrowLeft size={19}/> 합격자 데이터</button></div>
        <div className="success-detail-card">
          <div className="success-profile-top"><div className="success-profile-avatar"><UserRound size={30}/></div><div><span>{selectedProfile.company} | {selectedProfile.job}</span><h1>{selectedProfile.name}</h1><small>내 프로필과 {selectedProfile.match}% 일치</small></div></div>
          <div className="success-detail-section"><h3>학력</h3><div className="success-info-row"><span>대학교</span><b>{selectedProfile.university}</b></div><div className="success-info-row"><span>전공</span><b>{selectedProfile.major}</b></div><div className="success-info-row"><span>학점</span><b>{selectedProfile.gpa}</b></div></div>
          <div className="success-detail-section"><h3>자격증</h3><div className="success-chip-list">{selectedProfile.certificates.map(item => <span key={item}>{item}</span>)}</div></div>
          <div className="success-detail-section"><h3>대외활동</h3><ul>{selectedProfile.activities.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div className="success-detail-section"><h3>경력</h3><p>{selectedProfile.career}</p></div>
          <div className="success-detail-section"><h3>합격 수기</h3><p>{selectedProfile.story}</p></div>
          <button className="primary-button" onClick={() => { setMentorApplyOpen(true); setMentorApplyMessage(''); setMentorApplyDate(''); }}>멘토링 신청하기</button>
        </div>
      </section>;
      return <section className="success-data-page">
        <div className="page-heading"><h1>합격자 데이터</h1><p>합격생의 스펙과 합격 경험을 확인해 보세요.</p></div>
        <div className="success-filter-tabs"><button className="active">전체</button><button>금융권</button><button>IT·데이터</button><button>공기업</button></div>
        <div className="success-list-count">내 프로필과 유사한 합격자 <b>{successfulProfiles.length}명</b></div>
        <div className="success-profile-list">
          {successfulProfiles.map(profile => <button className="success-profile-card" key={profile.id} onClick={() => setSelectedSuccessId(profile.id)}>
            <div className="success-card-top"><span>{profile.company} | {profile.job}</span><span className="success-match">{profile.match}% 일치</span></div>
            <div className="success-card-main"><div className="success-profile-avatar"><UserRound size={23}/></div><div><b>{profile.name}</b><small>{profile.university} · {profile.major} · 학점 {profile.gpa}</small></div><ChevronRight size={19}/></div>
            <div className="success-card-tags">{profile.certificates.slice(0,3).map(item => <span key={item}>{item}</span>)}</div>
            <p>{profile.story}</p>
          </button>)}
        </div>
      </section>;
    }
    if (activeTab === 'AI') {
      const aiTools = ['AI 검색','기업분석','AI 면접'];
      const companySamples = [
        { name: '삼성전자', industry: '반도체·전자·모바일', summary: 'DS(반도체)와 DX(완제품·모바일 등) 사업을 중심으로 메모리, 시스템반도체, 스마트폰, 디스플레이, 가전 사업을 전개합니다.', metrics: ['2025년 연결 매출 333.6조 원', '2025년 연결 영업이익 43.6조 원', '2025년 4분기 매출 93.8조 원·영업이익 20.1조 원'], strategy: ['HBM 등 고부가 메모리와 AI 반도체 경쟁력 강화', '갤럭시의 에이전틱 AI 경험 확대', '프리미엄 제품과 AI 기반 고객 경험으로 수익성 개선'], opportunity: ['AI 데이터센터 확대로 고성능 메모리 수요 확대', '온디바이스 AI와 모바일 AI 서비스 확장', '반도체·소프트웨어 융합 직무 기회'], risks: ['메모리 가격 및 반도체 업황 변동성', '글로벌 경쟁과 대규모 설비투자 부담', '제품군별 수익성 격차'], jobs: ['반도체 공정·설비', '반도체 소자·설계', '소프트웨어·AI', '상품기획·마케팅'], skills: ['반도체·전자·컴퓨터 등 직무 전공지식', '데이터 분석과 문제 원인 추적', '협업·품질·공정 개선 역량'], prep: ['지원 사업부(DS/DX)와 제품을 먼저 특정하기', '반도체·AI 관련 산업 이슈를 기술·시장 관점으로 요약하기', '프로젝트에서 문제-분석-개선-성과를 수치로 정리하기'], source: '삼성전자 2025년 4분기 및 연간 실적 발표(2026.01.29)' },
        { name: '네이버', industry: '인터넷·플랫폼·커머스·핀테크', summary: '검색·광고, 커머스, 핀테크, 콘텐츠, 엔터프라이즈 사업을 운영하며 자체 서비스 데이터와 AI를 결합하는 플랫폼 전략을 추진합니다.', metrics: ['2025년 연간 매출 12조 350억 원', '2025년 연간 영업이익 2조 2,081억 원', '2025년 커머스 연간 매출 전년 대비 26.2% 성장'], strategy: ['검색·광고와 커머스 핵심 경쟁력 강화', 'AI 브리핑·쇼핑 AI 에이전트 등 서비스 전반에 AI 적용', '콘텐츠·AI 인프라·N배송에 전략적 투자'], opportunity: ['검색에서 구매·예약·결제로 이어지는 AI 에이전트 경험', '커머스 개인화와 판매자 도구 고도화', '클라우드·AI 인프라 및 글로벌 사업 확장'], risks: ['국내외 플랫폼 경쟁 심화', 'AI 서비스 투자 대비 수익화 과제', '개인정보·추천 알고리즘 신뢰 확보'], jobs: ['서비스·사업 기획', '데이터 분석·AI', '커머스·광고 기획', '소프트웨어 개발'], skills: ['사용자 문제 정의와 지표 설계', 'SQL·Python 기반 데이터 분석', '실험(A/B 테스트)과 서비스 개선 경험'], prep: ['네이버 검색·쇼핑·지도 중 하나를 선택해 사용자 여정 분석하기', '전환율·재방문율·검색 성공률 등 핵심 KPI 제안하기', 'AI 기능을 기존 서비스에 붙일 때 효용과 위험을 함께 설명하기'], source: 'NAVER 2025년 4분기 및 연간 실적 발표(2026.02.06)' },
        { name: '카카오', industry: '메신저·플랫폼·핀테크·콘텐츠', summary: '카카오톡 기반 플랫폼과 모빌리티·페이·커머스·콘텐츠 사업을 운영하며 AI를 핵심 성장 축으로 키우는 전략을 공개했습니다.', metrics: ['2025년 연결 매출 8조 991억 원', '2025년 연결 영업이익 7,320억 원', '2025년 영업이익 전년 대비 48% 증가'], strategy: ['카카오톡과 AI를 핵심 성장 동력으로 강화', '카카오톡 내 AI 에이전트와 외부 파트너 생태계 확대', '핵심 사업 중심으로 운영 효율과 수익성 개선'], opportunity: ['메신저 맥락을 활용한 개인화 AI 에이전트', '페이·모빌리티·커머스 간 서비스 연결', 'AI 기반 사용자 경험 및 파트너 서비스 기획'], risks: ['플랫폼 규제와 개인정보·신뢰 이슈', 'AI 서비스 차별화와 수익화 검증', '콘텐츠·플랫폼 사업 간 성장성 차이'], jobs: ['서비스 기획·프로덕트 매니저', 'AI 서비스·데이터', '광고·커머스 사업', '모빌리티·페이 서비스'], skills: ['사용자 행동과 서비스 지표 분석', '제품 요구사항 정의와 우선순위 설정', '개발·디자인·사업 조직과 협업하는 능력'], prep: ['카카오톡의 특정 사용 상황을 정해 불편과 개선안을 정의하기', 'AI 에이전트의 사용성·정확도·개인정보 보호 지표 제안하기', '기획안에 타깃 사용자·문제·해결책·KPI·리스크를 포함하기'], source: '카카오 2025년 연간 실적 발표(2026.02.12)' },
        { name: 'SK하이닉스', industry: '반도체·AI 메모리', summary: 'DRAM·NAND와 HBM 등 메모리 반도체를 공급하며 AI 서버와 데이터센터의 메모리 수요에 대응하는 기업입니다.', metrics: ['2025년 매출 97조 1,467억 원', '2025년 영업이익 47조 2,063억 원', '2025년 HBM 매출 전년 대비 2배 이상 성장'], strategy: ['HBM 등 AI 메모리와 고부가 제품 비중 확대', '서버용 DRAM 및 기업용 SSD 경쟁력 강화', 'AI 추론·분산형 아키텍처 확산에 대응한 메모리 솔루션 확대'], opportunity: ['AI 데이터센터용 HBM·서버 메모리 수요', '차세대 메모리 제품과 패키징 기술', '고객사 성능 요구를 반영하는 솔루션·기술영업'], risks: ['메모리 가격과 공급 사이클 변동', '글로벌 경쟁사의 기술 추격과 고객 집중도', '대규모 설비투자 및 기술 개발 리스크'], jobs: ['메모리 소자·설계', '공정·양산기술', '장비·품질·수율 분석', '데이터·소프트웨어'], skills: ['반도체 소자·공정·재료 기초', '수율·불량 데이터 분석 능력', '문제 원인 분석과 실험 설계'], prep: ['HBM과 일반 DRAM의 차이 및 AI 서버에서의 역할 설명하기', '공정·품질 데이터를 분석해 개선한 프로젝트 정리하기', '수율·불량·생산성 중 하나를 선택해 개선 가설과 검증 지표 제안하기'], source: 'SK하이닉스 2025년 경영실적 발표(2026.01.28)' },
        { name: '현대자동차', industry: '자동차·모빌리티·전동화', summary: '완성차 제조와 글로벌 판매를 기반으로 전기차·하이브리드·소프트웨어 중심 차량 및 지역별 생산 체계 전환을 추진합니다.', metrics: ['2025년 글로벌 판매 413만 8,389대', '2025년 매출 186.3조 원', '2025년 영업이익 11.47조 원, 영업이익률 6.2%'], strategy: ['전동화 리더십과 하이브리드 등 유연한 파워트레인 전략', '지역별 생산 현지화와 공급망 대응', '품질·안전·원가 경쟁력 및 글로벌 운영 효율 강화'], opportunity: ['전기차·하이브리드 전환과 차량 소프트웨어', '스마트팩토리·생산 데이터 분석', '글로벌 공급망·품질·원가 혁신'], risks: ['관세와 글로벌 무역 불확실성', '전동화 전환 속도와 지역별 수요 차이', '가격 경쟁 및 생산 원가 압박'], jobs: ['생산·공정관리', '품질·구매·SCM', '차량 소프트웨어·데이터', '상품·해외사업 기획'], skills: ['생산·품질·공급망 프로세스 이해', '데이터 기반 원가·품질 분석', '글로벌 협업과 문제 해결 능력'], prep: ['전기차·하이브리드·내연기관의 시장별 전략 비교하기', '생산·품질·공급망 개선 경험을 수치로 정리하기', '관세·현지화 등 외부 변수가 지원 직무에 미치는 영향 분석하기'], source: '현대자동차 2025년 연간 및 4분기 실적 발표(2026.01.29)' },
        { name: 'LG전자', industry: '가전·전장·B2B·플랫폼', summary: '생활가전과 TV뿐 아니라 차량용 솔루션, HVAC, webOS 플랫폼 등 B2B와 서비스형 사업을 확대하고 있습니다.', metrics: ['2025년 연결 매출 89.2조 원(잠정)', '가전·차량용 솔루션 사업이 연간 매출 최고치 기록', 'webOS 글로벌 설치 기반 약 2억 6천만 대'], strategy: ['B2B·webOS·제품 기반 서비스·D2C 등 질적 성장 사업 확대', '차량용 솔루션과 HVAC 경쟁력 강화', 'AI 전환으로 운영 생산성과 실행 속도 개선'], opportunity: ['전장·차량용 소프트웨어와 부품', 'AI 데이터센터 냉각·HVAC', 'webOS 및 구독형 서비스 플랫폼'], risks: ['디스플레이 사업의 수익성 부담', '글로벌 가전 수요와 환율·관세 영향', 'B2B·플랫폼 신사업의 수익화 속도'], jobs: ['상품기획·마케팅', '전장·소프트웨어', '생산·품질·SCM', 'B2B 사업개발'], skills: ['제품·고객 경험과 시장 분석', 'B2B 고객 요구사항 정의', '품질·원가·납기 지표 관리'], prep: ['가전·전장·HVAC·webOS 중 지원 사업을 특정하기', 'B2B 사업의 고객과 구매 의사결정 구조 분석하기', '제품·서비스 개선 아이디어를 고객 가치와 수익성 지표로 제시하기'], source: 'LG전자 2025년 잠정 실적 및 2026년 CEO 전략 발표(2026.01)' },
        { name: '한국자산관리공사', industry: '공공·금융·자산관리', summary: '국유재산 관리, 기업·가계 재기 지원, 공공자산 가치 제고 등 공공성과 금융 전문성을 결합한 사업을 수행하는 공공기관입니다.', metrics: ['공공기관 특성상 단순 매출 비교보다 사업 성과·정책 기여·재무 건전성 지표를 함께 확인해야 합니다.'], strategy: ['국유재산의 효율적 관리와 활용 가치 제고', '취약계층·기업의 재기 지원과 금융 안전망 역할', '공공자산 데이터와 디지털 업무 혁신'], opportunity: ['공공데이터·디지털 전환 및 업무 자동화', '자산·채권·기업 구조조정 관련 분석', '정책 목적과 이용자 편의를 함께 고려하는 서비스 개선'], risks: ['정책·금리·부동산 경기 변화에 따른 업무 변동', '공공성과 효율성 간 균형', '민감한 금융·개인정보의 안전한 처리'], jobs: ['일반행정·사업관리', '금융·자산관리', '데이터·IT'], skills: ['공공기관 NCS 및 직무 기초', '문서 작성·자료 분석·보고 능력', '금융·법률·부동산 관련 기초 이해'], prep: ['기관의 주요 사업과 정책 목적을 사업별로 정리하기', '공공성과 효율성을 함께 개선한 경험을 STAR로 준비하기', 'NCS와 지원 직무의 법·금융·데이터 기초를 병행하기'], source: '기관 사업 소개 및 공시자료 확인 필요' }
      ];
      const companyInterviewExamples = {
        '삼성전자': [
          { q: '삼성전자의 DS와 DX 사업 중 지원 분야를 선택한 이유는 무엇인가요?', a: '저는 기술이 실제 고객의 문제를 해결하는 과정에 관심이 있어 지원했습니다. 특히 지원 분야가 담당하는 제품과 고객을 살펴보며, 기술 경쟁력뿐 아니라 품질과 사용 경험이 함께 중요하다고 생각했습니다. 학교 프로젝트에서 데이터를 분석해 문제 원인을 찾고 개선안을 제안한 경험을 바탕으로, 입사 후에는 현장의 데이터를 꼼꼼히 확인하고 유관 부서와 협업해 제품과 공정의 완성도를 높이고 싶습니다.', keywords: ['지원 사업부·제품 이해', '직무 관련 경험', '품질·협업·문제 해결'] },
          { q: 'AI 반도체 시장에서 삼성전자가 강화해야 할 경쟁력은 무엇이라고 생각하나요?', a: 'AI 반도체 시장에서는 성능뿐 아니라 전력 효율, 수율, 패키징, 고객사의 시스템과의 호환성이 함께 중요하다고 생각합니다. 따라서 고대역폭 메모리와 차세대 메모리 기술을 강화하는 동시에 고객 요구를 빠르게 반영하고 안정적인 양산 품질을 확보해야 합니다. 저는 데이터를 근거로 문제를 정의하고 개선 효과를 검증하는 방식으로 기여하고 싶습니다.', keywords: ['HBM·메모리', '수율·품질', '고객 요구·데이터 기반 개선'] }
        ],
        '네이버': [
          { q: '네이버 서비스 중 개선하고 싶은 서비스를 하나 고르고 이유를 설명해 주세요.', a: '네이버 쇼핑을 선택하겠습니다. 사용자가 원하는 상품을 빠르게 찾고 신뢰할 수 있는 정보를 바탕으로 구매하도록 돕는 것이 중요하다고 생각합니다. 검색어와 클릭, 구매 전환 데이터를 구분해 탐색 과정에서 이탈이 큰 구간을 찾고, 상품 정보의 정확도와 추천 이유 안내를 개선하겠습니다. 개선 전후에는 검색 성공률, 상세 페이지 진입률, 구매 전환율을 함께 확인하겠습니다.', keywords: ['사용자 문제 정의', '검색·추천 데이터', '전환율·검색 성공률'] },
          { q: 'AI를 네이버 플랫폼에 적용할 때 가장 중요하게 고려할 점은 무엇인가요?', a: '사용자에게 실제로 도움이 되는지와 결과를 신뢰할 수 있는지를 함께 고려해야 합니다. 검색이나 쇼핑에서 AI가 답을 제시하더라도 근거가 불명확하거나 최신 정보가 아니면 오히려 불편을 줄 수 있습니다. 따라서 정확도와 응답 속도뿐 아니라 출처 확인, 개인정보 보호, 사용자의 수정·선택권을 설계하고 반복적으로 검증해야 한다고 생각합니다.', keywords: ['사용자 효용', '정확성·신뢰성', '개인정보 보호·검증'] }
        ],
        '카카오': [
          { q: '카카오톡에 추가하면 좋을 AI 기능을 제안해 주세요.', a: '대화에서 발생한 일정과 할 일을 사용자가 동의한 범위 안에서 정리해 주는 AI 일정 도우미를 제안합니다. 단순히 내용을 요약하는 데서 끝나지 않고 날짜·장소·담당자를 추출해 사용자가 확인한 뒤 캘린더나 할 일에 등록하도록 하겠습니다. 성과는 기능 사용 후 일정 등록 완료율, 재사용률, 잘못 추출된 정보의 수정률로 측정하겠습니다. 대화 내용은 민감할 수 있으므로 명시적 동의와 삭제 기능을 기본으로 두겠습니다.', keywords: ['AI 에이전트', '대화 맥락 활용', '명시적 동의·개인정보'] },
          { q: '플랫폼 기업이 사용자 신뢰를 얻기 위해 무엇을 해야 한다고 생각하나요?', a: '편리한 기능을 제공하는 것만큼 데이터가 어떻게 사용되는지 투명하게 알리는 것이 중요합니다. 이용자가 추천이나 자동화 결과의 이유를 이해하고 원하지 않을 때 쉽게 끌 수 있어야 합니다. 서비스 기획 단계에서 개인정보 최소 수집, 명확한 동의, 오류 신고와 수정 절차를 함께 설계하겠습니다.', keywords: ['투명성', '개인정보 최소 수집', '사용자 통제권'] }
        ],
        'SK하이닉스': [
          { q: 'AI 시대에 HBM이 중요한 이유를 설명해 주세요.', a: 'AI 가속기는 대량의 데이터를 빠르게 처리해야 하므로 연산 성능뿐 아니라 메모리에서 데이터를 공급하는 속도와 효율도 중요합니다. HBM은 여러 DRAM 다이를 적층해 높은 대역폭을 제공하는 메모리로, AI 학습과 추론 시스템의 데이터 병목을 줄이는 데 기여합니다. 다만 성능 외에도 발열, 전력, 수율과 패키징 신뢰성이 중요하므로 이 요소들을 함께 고려해야 한다고 생각합니다.', keywords: ['고대역폭 메모리', 'AI 데이터 처리', '발열·전력·수율'] },
          { q: '생산 공정의 수율이 하락한다면 어떻게 대응하겠습니까?', a: '먼저 수율 정의와 측정 기간, 제품·공정 조건이 동일한지 확인해 데이터의 신뢰성을 점검하겠습니다. 이후 공정 단계와 장비, 원자재, 작업 조건별로 불량 분포를 나누어 이상이 시작된 구간을 찾겠습니다. 원인 후보를 좁힌 뒤 현장 담당자와 검증 실험을 진행하고, 개선 전후 수율과 불량 유형을 비교해 효과를 확인하겠습니다.', keywords: ['데이터 검증', '공정별 원인 분석', '개선 실험·수율'] }
        ],
        '현대자동차': [
          { q: '전기차 수요 변화에 자동차 기업은 어떻게 대응해야 한다고 생각하나요?', a: '지역별 충전 인프라와 소비자 선호, 정책, 가격 민감도가 다르기 때문에 하나의 방식만 고집하기보다 시장별 수요를 분석해야 한다고 생각합니다. 전기차와 하이브리드 등 다양한 파워트레인 선택지를 운영하면서 배터리 원가, 품질, 공급망 안정성을 함께 관리해야 합니다. 판매 데이터와 고객 의견을 지속적으로 확인해 지역별 제품과 생산 계획을 조정하는 것이 중요합니다.', keywords: ['지역별 수요', '전동화·하이브리드', '원가·품질·공급망'] },
          { q: '생산관리 직무에서 가장 중요하다고 생각하는 지표는 무엇인가요?', a: '하나의 지표만 보기보다 생산성, 불량률, 납기 준수율, 설비 가동률을 함께 보겠습니다. 생산량을 높이더라도 불량이나 안전 문제가 커지면 전체 성과가 좋아졌다고 보기 어렵기 때문입니다. 지표 간 관계를 확인하고 병목 공정을 찾아 개선안을 실행한 뒤, 품질과 납기까지 함께 개선됐는지 검증하겠습니다.', keywords: ['생산성', '불량률·납기', '안전·종합 지표'] }
        ],
        'LG전자': [
          { q: 'LG전자의 B2B 사업 확대가 중요한 이유는 무엇이라고 생각하나요?', a: 'B2B 사업은 고객사의 업무 환경과 장기 운영 요구에 맞춘 솔루션을 제공해 제품 판매를 넘어 지속적인 파트너십을 만들 수 있다는 점에서 중요하다고 생각합니다. 차량용 솔루션이나 HVAC처럼 고객별 요구가 다른 분야에서는 기술력뿐 아니라 유지보수, 품질, 공급 안정성도 경쟁력이 됩니다. 고객의 문제와 도입 효과를 수치로 정의해 제품·서비스 개선으로 연결하고 싶습니다.', keywords: ['B2B 고객 가치', '차량용 솔루션·HVAC', '장기 파트너십·품질'] },
          { q: '제품 기획에서 고객 경험과 수익성이 충돌한다면 어떻게 하겠습니까?', a: '먼저 고객 불편의 심각도와 발생 빈도, 개선에 필요한 비용을 나누어 보겠습니다. 모든 요구를 한 번에 반영하기보다 고객 만족과 사업 성과에 영향이 큰 문제부터 우선순위를 정하겠습니다. 작은 범위에서 시범 적용하고 만족도, 사용률, 비용 대비 효과를 확인한 뒤 확대 여부를 결정하겠습니다.', keywords: ['고객 불편', '우선순위·비용 효과', '시범 적용·성과 측정'] }
        ],
        '한국자산관리공사': [
          { q: '공공성과 효율성이 충돌하는 상황에서 어떤 기준으로 판단하겠습니까?', a: '공공기관의 업무는 국민에게 미치는 영향과 법령·정책 목적을 우선 확인해야 한다고 생각합니다. 그 범위 안에서 처리 절차와 비용, 소요 시간을 분석해 효율성을 높일 방법을 찾겠습니다. 예를 들어 반복 업무를 표준화하거나 디지털화하더라도 정보 접근성이 낮은 이용자를 위한 대체 절차를 마련해 공공성과 편의성을 함께 확보하겠습니다.', keywords: ['정책 목적·법령 준수', '국민 편익', '절차 개선·디지털화'] },
          { q: '한국자산관리공사의 사업 중 관심 있는 분야와 기여 방안을 말해 주세요.', a: '국유재산의 관리와 활용 분야에 관심이 있습니다. 공공자산은 보유 자체보다 국민에게 필요한 방식으로 효율적으로 활용되는 것이 중요하다고 생각합니다. 자산 현황과 이용 수요 데이터를 정리해 활용 가능성이 높은 자산을 파악하고, 관련 부서와 협업해 이용 편의와 관리 효율을 함께 높이는 데 기여하고 싶습니다.', keywords: ['국유재산 관리', '공공자산 활용', '데이터 기반 업무 개선'] }
        ]
      };
      const chosenCompany = companySamples.find(item => item.name === selectedCompany);
      const runAiSearch = () => {
        if (!aiSearchQuery.trim()) return;
        setAiSearchSubmitted(aiSearchQuery.trim());
      };
      const runCompanySearch = () => {
        const found = companySamples.find(item => item.name.includes(companyQuery.trim()) || companyQuery.trim().includes(item.name));
        if (found) setSelectedCompany(found.name);
        else setSelectedCompany('');
      };
      return <section className="ai-hub-page">
        <div className="page-heading"><h1>AI 커리어</h1><p>나에게 필요한 취업 정보를 AI로 탐색해 보세요.</p></div>
        <div className="ai-tool-tabs">
          {aiTools.map(tool => <button key={tool} className={selectedAiTool === tool ? 'active' : ''} onClick={() => setSelectedAiTool(selectedAiTool === tool ? '' : tool)}>
            <Sparkles size={16}/>{tool}<ChevronRight size={15}/>
          </button>)}
        </div>
        {!selectedAiTool && <div className="ai-tool-intro">
          <div className="ai-intro-icon"><Sparkles size={25}/></div>
          <h2>어떤 도움이 필요하신가요?</h2>
          <p>AI 검색으로 취업 정보를 찾고, 기업분석으로 지원 전략을 세워보세요.</p>
          <div className="ai-quick-actions">
            <button onClick={() => setSelectedAiTool('AI 검색')}><Search size={19}/><b>AI 검색</b><small>직무·자격증·취업 정보 찾기</small></button>
            <button onClick={() => setSelectedAiTool('기업분석')}><Building2 size={19}/><b>기업분석</b><small>기업 정보와 준비 전략 확인</small></button>
          </div>
        </div>}
        {selectedAiTool === 'AI 검색' && <div className="ai-workspace">
          <div className="ai-workspace-heading"><button onClick={() => {setSelectedAiTool('');setAiSearchSubmitted('');}}><ArrowLeft size={17}/> AI 커리어</button><h2>AI 검색</h2><p>궁금한 취업 정보를 입력해 보세요.</p></div>
          <div className="ai-query-box"><Search size={18}/><input value={aiSearchQuery} onChange={e => setAiSearchQuery(e.target.value)} onKeyDown={e => {if(e.key==='Enter') runAiSearch();}} placeholder="예: 데이터 분석 직무에 필요한 자격증"/><button onClick={runAiSearch} disabled={!aiSearchQuery.trim()}>검색</button></div>
          <div className="ai-suggestion-label">추천 검색어</div>
          <div className="ai-suggestion-chips">{['산업경영공학과 취업 분야','데이터 분석 자격증','금융권 인턴 준비','서비스 기획 포트폴리오'].map(item => <button key={item} onClick={() => {setAiSearchQuery(item);setAiSearchSubmitted(item);}}>{item}</button>)}</div>
          {aiSearchSubmitted && <div className="ai-answer-card">
            <div className="ai-answer-title"><Sparkles size={17}/> 검색 결과 <span>질문: {aiSearchSubmitted}</span></div>
            <p>입력한 주제와 관련해 다음 내용을 우선 확인해 보세요.</p>
            <ul>
              <li>관심 직무의 주요 업무와 요구 역량을 채용공고에서 비교해 보세요.</li>
              <li>관련 프로젝트·대외활동 경험을 정리하고 결과를 구체적인 수치로 표현해 보세요.</li>
              <li>직무에 따라 SQLD, ADsP, 컴퓨터활용능력 등 관련 자격을 검토할 수 있어요.</li>
            </ul>
            <small>※ 현재는 화면 시연용 예시 답변이며 외부 AI 검색 서비스와 연결된 결과가 아닙니다.</small>
          </div>}
        </div>}
        {selectedAiTool === '기업분석' && <div className="ai-workspace">
          <div className="ai-workspace-heading"><button onClick={() => {setSelectedAiTool('');setSelectedCompany('');}}><ArrowLeft size={17}/> AI 커리어</button><h2>기업분석</h2><p>기업명을 선택하면 기업 정보와 직무 준비 항목을 확인할 수 있어요.</p></div>
          <div className="ai-query-box"><Search size={18}/><input value={companyQuery} onChange={e => setCompanyQuery(e.target.value)} onKeyDown={e => {if(e.key==='Enter') runCompanySearch();}} placeholder="기업명을 입력해 주세요."/><button onClick={runCompanySearch} disabled={!companyQuery.trim()}>분석</button></div>
          <div className="ai-suggestion-label">분석 가능한 예시 기업</div>
          <div className="company-choice-grid">{companySamples.map(company => <button key={company.name} className={selectedCompany===company.name?'active':''} onClick={() => {setSelectedCompany(company.name);setCompanyQuery(company.name);}}><Building2 size={17}/><span>{company.name}</span><ChevronRight size={15}/></button>)}</div>
          {chosenCompany && <div className="company-analysis-card">
            <div className="company-analysis-top"><span>{chosenCompany.industry}</span><h3>{chosenCompany.name}</h3><p>{chosenCompany.summary}</p></div>
            <div className="company-analysis-section"><h4>핵심 사업·실적</h4><ul>{chosenCompany.metrics.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="company-analysis-section"><h4>최근 사업 방향</h4><ul>{chosenCompany.strategy.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="company-analysis-section"><h4>성장 기회</h4><ul>{chosenCompany.opportunity.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="company-analysis-section"><h4>주요 리스크·과제</h4><ul>{chosenCompany.risks.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="company-analysis-section"><h4>관심 직무 선택</h4><select value={companyJobFocus} onChange={e => setCompanyJobFocus(e.target.value)}><option value="">희망 직무를 선택해 주세요.</option>{chosenCompany.jobs.map(item => <option key={item}>{item}</option>)}</select></div>
            <div className="company-analysis-section"><h4>직무별 요구 역량</h4><ul>{chosenCompany.skills.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="company-analysis-section"><h4>CareerNav 취업 방향 제안</h4><ol>{chosenCompany.prep.map(item => <li key={item}>{item}</li>)}</ol>{companyJobFocus && <div className="company-personal-plan"><b>{companyJobFocus} 준비 액션</b><p>① 해당 직무의 최근 채용공고 3건을 비교해 공통 요구 역량을 추출하세요.</p><p>② 관련 프로젝트 1개를 선정해 본인 역할·사용 도구·성과를 포트폴리오로 정리하세요.</p><p>③ 이 기업의 사업 방향과 연결되는 개선 아이디어를 1페이지로 작성하세요.</p></div>}</div>
            <div className="company-analysis-section company-interview-section"><h4>{chosenCompany.name} 면접 예상 질문·모범답안</h4><p className="company-interview-guide">기업의 사업 방향을 반영한 연습용 예시 답변입니다. 본인의 실제 경험과 지원 직무에 맞게 수정해 사용하세요.</p>{(companyInterviewExamples[chosenCompany.name] || []).map((item,index) => {const answerKey = `${chosenCompany.name}-${index}`; const isOpen = openCompanyAnswer === answerKey; return <article className="company-interview-item" key={answerKey}><div className="company-interview-question"><b>Q{index+1}. {item.q}</b><button type="button" onClick={() => setOpenCompanyAnswer(isOpen ? null : answerKey)}>{isOpen ? '모범답안 접기' : '모범답안 보기'} <ChevronRight size={14}/></button></div>{isOpen && <div className="company-interview-answer"><b>모범답안 예시</b><p>{item.a}</p><b>핵심 키워드</b><div className="ai-suggestion-chips">{item.keywords.map(word => <span key={word}>{word}</span>)}</div><small>답변 팁: 본인의 프로젝트·대외활동·근로 경험에서 실제 사례와 결과를 넣으면 더 설득력 있어요.</small></div>}</article>;})}</div>
            <small>자료 기준: {chosenCompany.source}. 재무 수치는 회사가 공시한 2025년 실적 기준이며, 사업 방향은 회사 발표를 요약한 것입니다. 직무별 요구 역량과 준비 제안은 CareerNav의 해석이며 실제 채용공고와 다를 수 있습니다.</small>
          </div>}
        </div>}
        {selectedAiTool === 'AI 면접' && <div className="ai-workspace">
          <div className="ai-workspace-heading"><button onClick={() => {setSelectedAiTool('');setInterviewFeedback(null);}}><ArrowLeft size={17}/> AI 커리어</button><h2>AI 모의면접</h2><p>직무와 면접 유형을 선택하고 답변을 연습한 뒤 개선 피드백을 받아보세요.</p></div>
          <div className="interview-setup-card">
            <label>지원 직무</label>
            <select value={interviewRole} onChange={e => {setInterviewRole(e.target.value);setInterviewQuestionIndex(0);setInterviewFeedback(null);}}>
              {['서비스 기획','데이터 분석','마케팅','경영·일반 사무','금융·공기업','소프트웨어 개발','반도체·생산관리','영업·사업개발'].map(role => <option key={role}>{role}</option>)}
            </select>
            <label>면접 유형</label>
            <div className="interview-mode-grid">{['실전 모의면접','직무 역량','인성·경험','압박·꼬리질문'].map(mode => <button key={mode} className={interviewMode===mode?'active':''} onClick={() => {setInterviewMode(mode);setInterviewQuestionIndex(0);setInterviewFeedback(null);}}>{mode}</button>)}</div>
            <button className="primary-button" onClick={() => {setInterviewQuestionIndex(0);setInterviewAnswers([]);setInterviewAnswer('');setInterviewFeedback(null);}}>면접 연습 시작</button>
          </div>
          {(() => {
            const questionBank = {
              '서비스 기획': ['사용자 불편을 발견하고 서비스 개선으로 연결했던 경험을 설명해 주세요.','서비스의 핵심 지표를 하나 선택하고, 지표가 하락했을 때 원인을 어떻게 분석하겠습니까?','출시 일정과 사용자 요구가 충돌할 때 우선순위를 어떻게 정하겠습니까?','기획한 기능의 성과를 어떤 KPI로 측정하겠습니까?'],
              '데이터 분석': ['분석 결과가 현업의 예상과 다르게 나왔을 때 어떻게 검증하겠습니까?','결측치와 이상치가 많은 데이터를 어떻게 처리하겠습니까?','분석 결과를 비전문가에게 설득력 있게 전달한 경험을 말해 주세요.','분석 결과가 실제 의사결정에 기여했는지 어떻게 확인하겠습니까?'],
              '마케팅': ['타깃 고객을 정의하고 캠페인 전략을 세운 경험을 설명해 주세요.','광고 성과가 하락했을 때 어떤 지표부터 확인하겠습니까?','예산이 제한된 상황에서 채널별 마케팅 비용을 어떻게 배분하겠습니까?','브랜드 인지도와 실제 구매 전환을 함께 높이려면 어떻게 하겠습니까?'],
              '경영·일반 사무': ['반복적인 업무를 개선하거나 효율화한 경험을 설명해 주세요.','여러 부서의 요청이 동시에 들어오면 어떤 기준으로 처리하겠습니까?','자료의 오류를 발견했을 때 어떻게 대응하고 재발을 막겠습니까?','정확성과 처리 속도가 충돌할 때 어떻게 균형을 잡겠습니까?'],
              '금융·공기업': ['공공성과 수익성이 충돌하는 상황에서 어떤 기준으로 판단하겠습니까?','금융·경제 환경의 변화가 지원 기관의 사업에 미치는 영향을 설명해 주세요.','규정과 절차를 지키면서 민원인의 문제를 해결한 경험을 말해 주세요.','지원 기관의 주요 사업 중 개선이 필요하다고 생각하는 부분은 무엇입니까?'],
              '소프트웨어 개발': ['본인이 해결한 기술적 문제와 선택한 해결 방법을 설명해 주세요.','장애가 발생했을 때 원인을 좁히고 복구하는 절차를 설명해 주세요.','코드 품질과 개발 일정이 충돌할 때 어떻게 판단하겠습니까?','협업 중 기술적 의견 차이를 해결한 경험을 말해 주세요.'],
              '반도체·생산관리': ['공정 수율이 갑자기 하락하면 어떤 데이터부터 확인하겠습니까?','품질 문제의 근본 원인을 찾기 위해 어떤 방법을 사용하겠습니까?','생산성과 안전이 충돌하는 상황에서 어떻게 대응하겠습니까?','공정 개선의 효과를 어떤 지표로 검증하겠습니까?'],
              '영업·사업개발': ['고객의 요구와 회사의 수익성이 다를 때 어떻게 협상하겠습니까?','매출 목표를 달성하지 못했을 때 원인을 어떻게 분석하겠습니까?','신규 시장 진입 가능성을 평가할 때 어떤 데이터를 보겠습니까?','장기 고객 관계를 유지하기 위해 어떤 활동을 하겠습니까?']
            };
            const roleQuestions = questionBank[interviewRole] || questionBank['서비스 기획'];
            const modeQuestions = {
              '직무 역량': [
                `${interviewRole} 직무에서 가장 중요하다고 생각하는 역량 한 가지를 고르고, 이를 증명할 경험을 말해 주세요.`,
                '업무 성과를 측정할 핵심 지표를 정하고 그 이유를 설명해 주세요.',
                '제한된 시간과 데이터만 주어진다면 어떤 순서로 문제를 해결하겠습니까?',
                '입사 후 3개월 안에 해당 직무에서 만들고 싶은 성과는 무엇입니까?'
              ],
              '인성·경험': [
                '팀원과 의견이 달랐던 경험과 갈등을 해결한 과정을 말해 주세요.',
                '실패하거나 기대만큼 성과를 내지 못했던 경험에서 무엇을 배웠습니까?',
                '본인의 강점이 조직이나 팀에 기여했던 사례를 설명해 주세요.',
                '스트레스가 큰 상황에서 업무 우선순위를 정하고 관리하는 방법은 무엇입니까?'
              ],
              '압박·꼬리질문': [
                '그 경험에서 본인이 직접 기여한 부분이 정확히 무엇인가요?',
                '그 방법 말고 다른 대안은 검토하지 않았나요? 선택하지 않은 이유는 무엇인가요?',
                '성과가 본인의 행동 때문이라는 것을 어떤 근거로 설명할 수 있나요?',
                '같은 문제가 다시 발생한다면 이번에는 무엇을 다르게 하겠습니까?'
              ]
            };
            const questions = interviewMode === '실전 모의면접' ? roleQuestions : modeQuestions[interviewMode];
            const question = questions[interviewQuestionIndex % questions.length];
            const evaluateAnswer = () => {
              const answer = interviewAnswer.trim();
              if (answer.length < 20) { setInterviewFeedback({score:0, title:'답변을 조금 더 구체화해 보세요.', points:['상황과 본인의 역할을 먼저 설명해 주세요.','어떤 행동을 했는지 구체적인 사례를 추가해 주세요.','결과나 배운 점을 한 문장으로 마무리해 보세요.']}); return; }
              const hasSituation = /(상황|당시|문제|목표|배경)/.test(answer);
              const hasAction = /(분석|실행|개선|진행|해결|기획|설계|협업|수행)/.test(answer);
              const hasResult = /(결과|성과|달성|증가|감소|개선|%|건|명|원)/.test(answer);
              const hasRole = /(제가|저는|담당|주도|직접)/.test(answer);
              const score = 55 + [hasSituation,hasAction,hasResult,hasRole].filter(Boolean).length * 10 + (answer.length > 180 ? 5 : 0);
              const points = [];
              if (!hasSituation) points.push('답변 첫 부분에 당시 상황과 해결해야 했던 문제를 짧게 설명해 주세요.');
              if (!hasRole) points.push('팀 성과와 구분해 본인이 맡은 역할과 기여를 분명히 해 주세요.');
              if (!hasAction) points.push('어떤 기준과 방법으로 행동했는지 구체적인 과정을 추가해 주세요.');
              if (!hasResult) points.push('성과를 수치·기간·전후 비교로 제시하고 배운 점을 덧붙여 주세요.');
              if (answer.length < 180) points.push('핵심 경험을 1~2문장 더 보충하면 답변의 설득력이 높아집니다.');
              if (!points.length) points.push('상황-역할-행동-결과가 잘 드러납니다. 마지막에 지원 직무에서 어떻게 활용할지 연결해 보세요.');
              setInterviewFeedback({score, title: score >= 85 ? '구조가 잘 잡힌 답변이에요.' : '좋은 출발이에요. 아래 항목을 보완해 보세요.', points});
            };
            return <div className="interview-practice-card">
              <div className="interview-question-meta"><span>{interviewRole}</span><span>{interviewMode}</span><b>질문 {interviewQuestionIndex+1} / {questions.length}</b></div>
              <h3>{question}</h3>
              <textarea rows="7" value={interviewAnswer} onChange={e => {setInterviewAnswer(e.target.value);setInterviewFeedback(null);}} placeholder="답변을 작성해 주세요. 상황-과제-행동-결과(STAR)를 활용하면 좋아요."/>
              <div className="interview-action-row">
                <button className="outline-button" onClick={() => {setInterviewAnswer('');setInterviewFeedback(null);}}>다시 작성</button>
                <button className="primary-button" disabled={!interviewAnswer.trim()} onClick={evaluateAnswer}>답변 피드백 받기</button>
              </div>
              {interviewFeedback && <div className="interview-feedback">
                <div className="interview-score"><span>답변 구조 점검</span><b>{interviewFeedback.score === 0 ? '보완 필요' : `${interviewFeedback.score}점`}</b></div>
                <h4>{interviewFeedback.title}</h4>
                <ul>{interviewFeedback.points.map(point => <li key={point}>{point}</li>)}</ul>
                <small>※ 현재 평가는 답변의 구조와 키워드를 기준으로 한 시연용 규칙 기반 피드백이며, 실제 AI 평가나 합격 가능성 예측이 아닙니다.</small>
              </div>}
              <div className="interview-next-row">
                <button onClick={() => {setInterviewQuestionIndex((interviewQuestionIndex+questions.length-1)%questions.length);setInterviewAnswer('');setInterviewFeedback(null);}}>이전 질문</button>
                <button onClick={() => {setInterviewAnswers(prev => [...prev,{question,answer:interviewAnswer}]);setInterviewQuestionIndex((interviewQuestionIndex+1)%questions.length);setInterviewAnswer('');setInterviewFeedback(null);}}>다음 질문 <ChevronRight size={15}/></button>
              </div>
            </div>;
          })()}
        </div>}
      </section>;
    }
    if (activeTab === '비용관리') return <><div className="page-heading"><h1>취업 준비 비용관리</h1><p>이번 달 지출 내역을 관리하세요.</p></div><div className="stats-grid"><div><small>이번 달 지출</small><b>145,000원</b></div><div><small>지출 항목</small><b>4개</b></div></div><button className="outline-button full">+ 지출 내역 추가</button></>;
    if (activeTab === 'MY') return <><div className="page-heading"><h1>My Page</h1></div><div className="profile-card"><UserRound/><div><b>{form.name || '회원'}님</b><small>{form.university} {form.major}</small></div></div>{['구독 현황','지원 현황','최근 본 공고'].map(x => <button className="feature-row" key={x} onClick={() => x === '구독 현황' ? setScreen('subscription-status') : x === '지원 현황' ? setScreen('application-status') : setScreen('recent-jobs')}>{x}<ChevronRight/></button>)}
      <button className="feature-row" onClick={() => setScreen('member-info')}>회원정보관리<ChevronRight/></button>
      <button className="feature-row" onClick={() => setScreen('settings')}>설정<ChevronRight/></button>
      <button className="feature-row" onClick={() => setScreen('support')}>고객센터<ChevronRight/></button>
      <div className="my-account-actions">
        <button onClick={() => setShowLogoutModal(true)}>로그아웃</button>
        <button onClick={() => alert('회원 탈퇴 기능은 다음 단계에서 연결합니다.')}>탈퇴</button>
      </div>
      {showLogoutModal && <div className="logout-modal-backdrop" role="presentation" onClick={() => setShowLogoutModal(false)}>
        <div className="logout-modal" role="dialog" aria-modal="true" aria-labelledby="logout-title" onClick={e => e.stopPropagation()}>
          <h2 id="logout-title">로그아웃 하시겠습니까?</h2>
          <p>로그아웃하면 로그인 화면으로 이동합니다.</p>
          <div className="logout-modal-actions">
            <button className="logout-cancel" onClick={() => setShowLogoutModal(false)}>취소</button>
            <button className="logout-confirm" onClick={() => { setShowLogoutModal(false); setScreen('login'); setActiveTab('홈'); }}>확인</button>
          </div>
        </div>
      </div>}</>;
    if (activeTab === '이력서') return <><div className="page-heading"><h1>이력서</h1><p>나의 학력, 자격증, 경험을 관리하세요.</p></div><div className="empty-card"><FileText/><b>이력서 정보를 등록해 주세요.</b><p>{form.university} {form.major}</p><button onClick={() => setScreen('student-survey')}>이력서 수정</button></div></>;
    if (activeTab === '커뮤니티') {
      const filteredPosts = communityPosts.filter(post => {
        const categoryMatch = communityCategory === '전체' ||
          (communityCategory === '취업' && ['취업 Q&A', '합격 후기'].includes(post.category)) ||
          post.category === communityCategory;
        const activityMatch = communityActivity === '게시글' ||
          (communityActivity === '내가 쓴 글' && post.mine) ||
          (communityActivity === '댓글 단 글' && post.commented) ||
          (communityActivity === '찜' && post.liked) ||
          (communityActivity === '스크랩' && post.saved);
        const query = communitySearch.trim().toLowerCase();
        const searchMatch = !query || `${post.title} ${post.content} ${post.author}`.toLowerCase().includes(query);
        return categoryMatch && activityMatch && searchMatch;
      });

      const submitPost = () => {
        if (!newPostTitle.trim() || !newPostContent.trim()) {
          alert('제목과 내용을 입력해 주세요.');
          return;
        }
        setCommunityPosts(prev => [{
          id: Date.now(), category: newPostCategory, title: newPostTitle.trim(),
          author: form.name || '회원', role: '취업 준비생', date: '방금 전',
          views: 0, comments: 0, likes: 0, content: newPostContent.trim(),
          mine: true, liked: false, saved: false, commented: false
        }, ...prev]);
        setNewPostTitle('');
        setNewPostContent('');
        setShowPostEditor(false);
        setCommunityActivity('게시글');
        setCommunityCategory('전체');
        setCommunitySearch('');
      };

      const selectedCommunityPost = communityPosts.find(post => post.id === selectedCommunityPostId);
      const postComments = selectedCommunityPost ? (communityComments[selectedCommunityPost.id] || []) : [];
      const submitCommunityComment = () => {
        if (!communityCommentDraft.trim() || !selectedCommunityPost) return;
        const comment = { id: Date.now(), author: form.name || '회원', role: '취업 준비생', text: communityCommentDraft.trim(), date: '방금 전', mine: true, likes: 0 };
        setCommunityComments(prev => ({ ...prev, [selectedCommunityPost.id]: [...(prev[selectedCommunityPost.id] || []), comment] }));
        setCommunityPosts(prev => prev.map(post => post.id === selectedCommunityPost.id ? { ...post, comments: post.comments + 1, commented: true } : post));
        setCommunityCommentDraft('');
      };
      if (selectedCommunityPost) return <section className="community-page community-detail-page">
        <div className="community-detail-header">
          <button className="community-detail-back" onClick={() => { setSelectedCommunityPostId(null); setCommunityCommentDraft(''); }}><ArrowLeft size={20}/><span>커뮤니티</span></button>
          <button className="community-detail-more" onClick={() => alert('게시글 신고 및 관리 메뉴입니다.')}><MoreVertical size={19}/></button>
        </div>
        <article className="community-detail-post">
          <span className="community-post-category">{selectedCommunityPost.category}</span>
          <h1>{selectedCommunityPost.title}</h1>
          <div className="community-detail-author"><div className="community-small-avatar"><UserRound size={18}/></div><div><b>{selectedCommunityPost.author}</b><small>{selectedCommunityPost.role} · {selectedCommunityPost.date}</small></div></div>
          <div className="community-detail-body">{selectedCommunityPost.content}</div>
          <div className="community-detail-actions">
            <button className={selectedCommunityPost.liked ? 'is-on' : ''} onClick={() => setCommunityPosts(prev => prev.map(post => post.id === selectedCommunityPost.id ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) } : post))}><Heart size={17}/> 좋아요 {selectedCommunityPost.liked ? selectedCommunityPost.likes : selectedCommunityPost.likes}</button>
            <button className={selectedCommunityPost.saved ? 'is-on' : ''} onClick={() => setCommunityPosts(prev => prev.map(post => post.id === selectedCommunityPost.id ? { ...post, saved: !post.saved } : post))}><Bookmark size={17}/> 스크랩</button>
            <span><Eye size={15}/> 조회 {selectedCommunityPost.views}</span>
          </div>
        </article>
        <div className="community-comments-section">
          <h2>댓글 <span>{postComments.length}</span></h2>
          <div className="community-comment-list">
            {postComments.map(comment => <article className="community-comment" key={comment.id}>
              <div className="community-small-avatar"><UserRound size={17}/></div>
              <div className="community-comment-content">
                <div className="community-comment-meta"><b>{comment.author}</b><span>{comment.role} · {comment.date}</span></div>
                <p>{comment.text}</p>
                <button onClick={() => setCommunityComments(prev => ({ ...prev, [selectedCommunityPost.id]: (prev[selectedCommunityPost.id] || []).map(item => item.id === comment.id ? { ...item, likes: item.likes + 1 } : item) }))}><Heart size={13}/> 좋아요 {comment.likes}</button>
              </div>
            </article>)}
            {!postComments.length && <div className="community-comment-empty">첫 댓글을 남겨보세요.</div>}
          </div>
        </div>
        <div className="community-comment-compose">
          <input value={communityCommentDraft} onChange={e => setCommunityCommentDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') submitCommunityComment(); }} placeholder="댓글을 입력해 주세요."/>
          <button disabled={!communityCommentDraft.trim()} onClick={submitCommunityComment}><Send size={17}/> 등록</button>
        </div>
      </section>;

      return <>
        <section className="community-page">
          <div className="community-heading">
            <div><span className="eyebrow">CAREERNAV COMMUNITY</span><h1>커뮤니티</h1><p>취업 준비 경험과 정보를 나눠보세요.</p></div>
            <div className="community-avatar"><UserRound size={23}/></div>
          </div>
          <div className="community-profile-strip">
            <div><b>{form.name || '홍길동'}</b><small>커리어 준비생</small></div>
            <div className="community-profile-stats"><span><b>{communityPosts.filter(post => post.mine).length}</b> 작성글</span><span><b>28</b> 방문</span></div>
          </div>
          <div className="community-activity-tabs">
            {['게시글','내가 쓴 글','댓글 단 글','찜','스크랩'].map(item =>
              <button key={item} className={communityActivity === item ? 'active' : ''} onClick={() => setCommunityActivity(item)}>{item}</button>
            )}
          </div>
          <div className="community-search"><Search size={18}/><input placeholder="관심 있는 게시글 검색" value={communitySearch} onChange={e => setCommunitySearch(e.target.value)}/><button onClick={() => setCommunitySearch('')}>초기화</button></div>
          <div className="community-section-heading"><h2>이런 글 어때요?</h2><span>추천</span></div>
          <div className="community-recommend-grid">
            <button onClick={() => { setCommunityCategory('취업'); setCommunitySearch(''); }}><span className="recommend-tag">취업 TIP</span><b>이력서 작성법</b><small>서류 합격을 위한 작성 팁</small><span className="recommend-meta">게시글 20 · 조회수 300</span></button>
            <button onClick={() => { setCommunityCategory('취업 Q&A'); setCommunitySearch('면접'); }}><span className="recommend-tag">취업 Q&A</span><b>면접 Tip 있을까요?</b><small>면접 준비 경험을 공유해요</small><span className="recommend-meta">게시글 137 · 조회수 513</span></button>
          </div>
          <div className="community-post-heading"><div><h2>게시글</h2><span>{filteredPosts.length}개의 글</span></div><button className="community-write-button" onClick={() => setShowPostEditor(true)}><Plus size={16}/> 글쓰기</button></div>
          <div className="community-category-tabs">
            {['전체','취업','직장생활','일상'].map(item => <button key={item} className={communityCategory === item ? 'active' : ''} onClick={() => setCommunityCategory(item)}>{item}</button>)}
          </div>
          <div className="community-sort-row"><span>최신순</span><button onClick={() => setCommunityPosts(prev => [...prev].sort((a,b) => b.likes-a.likes))}>인기순</button></div>
          <div className="community-post-list">
            {filteredPosts.map(post => <article className="community-post-card community-post-clickable" key={post.id} onClick={() => { setSelectedCommunityPostId(post.id); setCommunityPosts(prev => prev.map(item => item.id === post.id ? { ...item, views: item.views + 1 } : item)); }}>
              <div className="community-post-top"><span className="community-post-category">{post.category}</span><span className="community-post-date">{post.date}</span></div>
              <h3>{post.title}</h3><p>{post.content}</p><div className="community-post-author">{post.author} <span>· {post.role}</span></div>
              <div className="community-post-actions"><span><Eye size={14}/> {post.views}</span><span><MessageSquare size={14}/> {post.comments}</span>
                <button className={post.liked ? 'is-on' : ''} onClick={e => { e.stopPropagation(); setCommunityPosts(prev => prev.map(item => item.id === post.id ? {...item, liked: !item.liked, likes: item.likes + (item.liked ? -1 : 1)} : item)); }}><Heart size={15}/> {post.likes}</button>
                <button className={post.saved ? 'is-on' : ''} onClick={e => { e.stopPropagation(); setCommunityPosts(prev => prev.map(item => item.id === post.id ? {...item, saved: !item.saved} : item)); }}><Bookmark size={15}/> 스크랩</button>
              </div>
            </article>)}
            {!filteredPosts.length && <div className="empty-card">해당하는 게시글이 없습니다.</div>}
          </div>
        </section>
        {showPostEditor && <div className="community-editor-backdrop" onClick={() => setShowPostEditor(false)}><div className="community-editor" onClick={e => e.stopPropagation()}>
          <div className="community-editor-head"><h2>게시글 작성</h2><button onClick={() => setShowPostEditor(false)}><X size={20}/></button></div>
          <label>게시판 선택</label><select value={newPostCategory} onChange={e => setNewPostCategory(e.target.value)}><option>취업 Q&A</option><option>합격 후기</option><option>직장생활</option><option>일상</option></select>
          <label>제목</label><input value={newPostTitle} onChange={e => setNewPostTitle(e.target.value)} placeholder="제목을 입력해 주세요."/>
          <label>내용</label><textarea rows="6" value={newPostContent} onChange={e => setNewPostContent(e.target.value)} placeholder="내용을 입력해 주세요."/>
          <button className="primary-button" onClick={submitPost}>등록하기</button>
        </div></div>}
      </>;
    }
    if (activeTab === '채팅') {
      const selectedRoom = chatRooms.find(room => room.id === selectedChatId) || chatRooms[0];
      const visibleRooms = chatRooms.filter(room => {
        const matchSearch = !chatSearch || `${room.name} ${room.role} ${room.preview}`.toLowerCase().includes(chatSearch.toLowerCase());
        const matchCategory = chatCategory === '전체' || (chatCategory === '즐겨찾기' && room.favorite) || (chatCategory === '안 읽음' && room.unread > 0);
        return matchSearch && matchCategory;
      });
      const openRoom = room => {
        setSelectedChatId(room.id);
        setChatView('room');
        setChatRooms(prev => prev.map(item => item.id === room.id ? {...item, unread: 0} : item));
      };
      const sendChatMessage = () => {
        if (!chatDraft.trim() || !selectedRoom) return;
        const message = { id: Date.now(), from: 'me', text: chatDraft.trim(), time: new Date().toLocaleTimeString('ko-KR', {hour:'2-digit',minute:'2-digit'}) };
        setChatRooms(prev => prev.map(room => room.id === selectedRoom.id ? {...room, preview: message.text, time: '방금 전', messages: [...room.messages, message]} : room));
        setChatDraft('');
      };
      if (chatView === 'room' && selectedRoom) return <section className="chat-page chat-room-page">
        <div className="chat-room-header">
          <button className="chat-back-button" onClick={() => setChatView('list')}><ArrowLeft size={20}/></button>
          <div className="chat-contact-avatar"><UserRound size={21}/></div>
          <div className="chat-contact-title"><b>{selectedRoom.name}</b><small>{selectedRoom.role}</small></div>
          <button onClick={() => alert('전화 기능은 실제 통신 서비스 연결 후 이용할 수 있습니다.')}><Phone size={18}/></button>
          <button onClick={() => alert('채팅방 설정 메뉴입니다.')}><MoreVertical size={19}/></button>
        </div>
        <div className="chat-date-divider"><span>오늘</span></div>
        <div className="chat-message-list">
          {selectedRoom.messages.map(message => <div key={message.id} className={`chat-message-row ${message.from === 'me' ? 'mine' : 'theirs'}`}>
            {message.from !== 'me' && <div className="chat-small-avatar"><UserRound size={16}/></div>}
            <div className="chat-message-content"><div className="chat-bubble">{message.text}</div><small>{message.time}</small></div>
          </div>)}
        </div>
        <div className="chat-compose">
          <button className="chat-add-button" onClick={() => alert('파일 첨부 기능은 다음 단계에서 연결합니다.')}><Plus size={21}/></button>
          <input value={chatDraft} onChange={e => setChatDraft(e.target.value)} onKeyDown={e => {if(e.key==='Enter') sendChatMessage();}} placeholder="메시지를 입력해 주세요."/>
          <button className="chat-send-button" onClick={sendChatMessage} disabled={!chatDraft.trim()}><Send size={18}/></button>
        </div>
      </section>;
      return <section className="chat-page">
        <div className="chat-list-heading"><div><span className="eyebrow">CAREERNAV MESSAGE</span><h1>채팅</h1><p>합격생과 현직자에게 궁금한 점을 물어보세요.</p></div><button className="chat-notice-button" onClick={() => alert('새로운 알림이 없습니다.')}><Bell size={20}/></button></div>
        <div className="chat-search"><Search size={18}/><input placeholder="이름 또는 직무로 검색" value={chatSearch} onChange={e => setChatSearch(e.target.value)}/><button onClick={() => setChatSearch('')}>초기화</button></div>
        <div className="chat-category-tabs">{['전체','즐겨찾기','안 읽음'].map(item => <button key={item} className={chatCategory===item?'active':''} onClick={() => setChatCategory(item)}>{item}</button>)}</div>
        <div className="chat-list-section-title">대화 목록 <span>{visibleRooms.length}</span></div>
        <div className="chat-room-list">
          {visibleRooms.map(room => <button className="chat-room-item" key={room.id} onClick={() => openRoom(room)}>
            <div className="chat-contact-avatar"><UserRound size={22}/></div>
            <div className="chat-room-summary"><div className="chat-room-name-row"><b>{room.name}</b><span>{room.time}</span></div><small>{room.role}</small><p>{room.preview}</p></div>
            <div className="chat-room-trailing">{room.favorite && <Heart size={15} fill="#e66b80" color="#e66b80"/>}{room.unread>0 && <i>{room.unread}</i>}</div>
          </button>)}
          {!visibleRooms.length && <div className="empty-card">대화가 없습니다.</div>}
        </div>
      </section>;
    }
    return (
      <>
        <section className="hero"><span className="eyebrow">WE WILL GUIDE YOUR FUTURE</span><h1>커리어의 시작,<br/>CareerNav</h1><p>나에게 딱 맞는 커리어를 찾아보세요.</p><button className="hero-button" onClick={() => setActiveTab('AI')}>AI 커리어 진단하기 <ArrowRight size={16}/></button></section>
        <div className="search-box"><Search size={18}/><input placeholder="직무, 기업, 채용공고 검색" value={search} onChange={e => {setSearch(e.target.value);setActiveTab('채용공고');}}/></div>
        <div className="quick-grid">{['필수 스펙','합격자 데이터','AI','비용관리','채용공고'].map(x => <button key={x} onClick={() => setActiveTab(x)}>{x}</button>)}</div>
        <SectionTitle title="요즘 주목받는 공고" onClick={() => setActiveTab('채용공고')}/>
        <div className="job-list">{jobs.slice(0,2).map(job => <JobCard key={job.id} job={job}/>)}</div>
        <SectionTitle title="인기 JOB"/>
        <JobCard job={jobs[2]}/>
      </>
    );
  };
  function SectionTitle({ title, onClick }) {
    return <div className="section-title"><h2>{title}</h2>{onClick && <button onClick={onClick}>전체보기 <ChevronRight size={15}/></button>}</div>;
  }

  return (
    <div className="app">
      <header className="top-header"><button className="brand" onClick={() => setActiveTab('홈')}><span className="brand-symbol small-symbol">↗</span><span>CareerNav<small>커리어 길잡이</small></span></button><button className="notification" onClick={() => alert('새로운 알림이 없습니다.')}><Bell size={21}/></button></header>
      <nav className="category-nav">{['필수 스펙','합격자 데이터','AI','비용관리','채용공고'].map(x => <button className={activeTab===x?'active':''} key={x} onClick={() => setActiveTab(x)}>{x}</button>)}</nav>
      <main className="main-content">{renderMain()}</main>
      <nav className="bottom-nav">{tabs.map(({name,icon:Icon}) => <button className={activeTab===name?'active':''} key={name} onClick={() => setActiveTab(name)}><Icon size={20}/><span>{name}</span></button>)}</nav>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);