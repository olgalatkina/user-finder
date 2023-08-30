import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import styles from './Search.module.scss';
import { Button } from 'components/Button';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields = {
  userName: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement & FormFields>) => {
    evt.preventDefault();
    const text = evt.currentTarget.userName.value;

    if (text) {
      onSubmit(text);
      evt.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
          autoFocus
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
};
