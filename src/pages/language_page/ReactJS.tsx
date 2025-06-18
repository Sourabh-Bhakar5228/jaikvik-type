import React, { useState } from "react";

const ReactJS = () => {
  const [activeTab, setActiveTab] = useState("basics");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(
      `Thank you for subscribing with ${email}! We'll keep you updated on React.js.`
    );
    setEmail("");
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-cyan-900 to-gray-900 py-20 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-bold mb-5 text-cyan-400">
            React.js Library
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Learn about React, the JavaScript library for building user
            interfaces with components.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Explore Features
          </button>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 max-w-6xl my-8">
        <div className="flex border-b border-gray-700 overflow-x-auto">
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "basics"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("basics")}
          >
            React Basics
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "features"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("features")}
          >
            Core Features
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "examples"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("examples")}
          >
            Examples
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "ecosystem"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("ecosystem")}
          >
            Ecosystem
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 max-w-6xl my-12">
        {activeTab === "basics" && (
          <div id="basics">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">
              React Fundamentals
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What is React */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  What is React?
                </h3>
                <p className="mb-4 text-gray-300">
                  React is a JavaScript library for building user interfaces
                  developed by Facebook.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Component-based architecture</li>
                  <li>Declarative programming model</li>
                  <li>Virtual DOM for efficient updates</li>
                  <li>Unidirectional data flow</li>
                  <li>Rich ecosystem and community</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <p className="text-sm text-gray-300">
                    <strong>Current version:</strong> React 18 (released March
                    2022)
                  </p>
                </div>
              </div>

              {/* Why React */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Why Use React?
                </h3>
                <p className="mb-4 text-gray-300">
                  React offers several advantages for UI development:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Reusable component architecture</li>
                  <li>Excellent performance with Virtual DOM</li>
                  <li>Rich ecosystem and tooling</li>
                  <li>Strong community support</li>
                  <li>Cross-platform (web, mobile, desktop)</li>
                </ul>
              </div>

              {/* Installation */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Getting Started
                </h3>
                <p className="mb-4 text-gray-300">
                  Create a new React application:
                </p>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`# Using create-react-app (legacy)
npx create-react-app my-app

# Using Vite (recommended)
npm create vite@latest my-react-app --template react

# Using Next.js
npx create-next-app@latest

# Basic React component structure
import React from 'react';

function App() {
  return <h1>Hello React!</h1>;
}

export default App;`}
                  </code>
                </pre>
              </div>

              {/* JSX */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  JSX Syntax
                </h3>
                <p className="mb-4 text-gray-300">
                  JSX is a syntax extension for JavaScript that resembles HTML:
                </p>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`// Basic JSX
const element = <h1 className="title">Hello, world!</h1>;

// Embedding expressions
const name = 'Alice';
const greeting = <p>Hello, {name}!</p>;

// Conditional rendering
const showMessage = true;
const message = showMessage && <div>Welcome!</div>;

// List rendering
const numbers = [1, 2, 3];
const listItems = numbers.map((number) => (
  <li key={number}>{number}</li>
));`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div id="features">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">
              React Core Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Components */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Components
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`// Function component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class component
class Counter extends React.Component {
  render() {
    return <div>Count: {this.props.count}</div>;
  }
}

// Component composition
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Counter count={10} />
    </div>
  );
}`}
                  </code>
                </pre>
              </div>

              {/* Hooks */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Hooks</h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`import { useState, useEffect } from 'react';

function Counter() {
  // State hook
  const [count, setCount] = useState(0);

  // Effect hook
  useEffect(() => {
    document.title = \`Count: \${count}\`;
    return () => {
      // Cleanup function
      document.title = 'React App';
    };
  }, [count]); // Dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                  </code>
                </pre>
              </div>

              {/* Props & State */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Props & State
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`// Parent component passing props
function Parent() {
  const [message, setMessage] = useState('Hello');
  
  return <Child text={message} onChange={setMessage} />;
}

// Child component receiving props
function Child({ text, onChange }) {
  const [localText, setLocalText] = useState(text);
  
  const handleChange = (e) => {
    const newText = e.target.value;
    setLocalText(newText);
    onChange(newText);
  };
  
  return <input value={localText} onChange={handleChange} />;
}`}
                  </code>
                </pre>
              </div>

              {/* Context API */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Context API
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`// Create context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => 
        setTheme(theme === 'light' ? 'dark' : 'light')
      }>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

// Consumer component
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button className={theme}>
      {theme} theme
    </button>
  );
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === "examples" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">
              React Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Todo List */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Todo List
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
                  </code>
                </pre>
              </div>

              {/* Form Handling */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Form Handling
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (formData.password.length < 6) newErrors.password = 'Password too short';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}`}
                  </code>
                </pre>
              </div>

              {/* API Fetch */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  API Fetch
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}`}
                  </code>
                </pre>
              </div>

              {/* Custom Hook */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Custom Hook
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`// useLocalStorage hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = 
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Using the custom hook
function Counter() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ecosystem" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">
              React Ecosystem
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* State Management */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  State Management
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Redux:</strong> Predictable state container
                  </li>
                  <li>
                    <strong>MobX:</strong> Reactive state management
                  </li>
                  <li>
                    <strong>Recoil:</strong> Experimental state management
                  </li>
                  <li>
                    <strong>Zustand:</strong> Minimal state management
                  </li>
                  <li>
                    <strong>Context API:</strong> Built-in solution
                  </li>
                </ul>
              </div>

              {/* Routing */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Routing
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>React Router:</strong> Most popular routing library
                  </li>
                  <li>
                    <strong>Next.js Routing:</strong> File-based routing
                  </li>
                  <li>
                    <strong>Reach Router:</strong> Accessible routing
                  </li>
                  <li>
                    <strong>Wouter:</strong> Lightweight alternative
                  </li>
                </ul>
              </div>

              {/* UI Libraries */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  UI Libraries
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Material-UI:</strong> Google's Material Design
                  </li>
                  <li>
                    <strong>Ant Design:</strong> Enterprise-class UI
                  </li>
                  <li>
                    <strong>Chakra UI:</strong> Accessible components
                  </li>
                  <li>
                    <strong>Tailwind CSS:</strong> Utility-first CSS
                  </li>
                  <li>
                    <strong>Styled Components:</strong> CSS-in-JS
                  </li>
                </ul>
              </div>

              {/* Frameworks */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  React Frameworks
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Next.js:</strong> Full-stack framework
                  </li>
                  <li>
                    <strong>Gatsby:</strong> Static site generator
                  </li>
                  <li>
                    <strong>Remix:</strong> Full-stack framework
                  </li>
                  <li>
                    <strong>React Native:</strong> Mobile development
                  </li>
                  <li>
                    <strong>Electron:</strong> Desktop applications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <section className="bg-gray-800 py-16 my-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-5 text-cyan-400">
            Stay Updated with React
          </h2>
          <p className="mb-8 text-gray-300">
            Subscribe to our newsletter to get the latest updates on React
            features, libraries, and best practices.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-full focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReactJS;
