import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Not Faund Page! Please, return to &nbsp;<Link to="/">Home page</Link>
    </div>
  );
}
