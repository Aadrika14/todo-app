import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faInbox, faCalendarAlt, faCalendarDay, faFilter, faTags, faHome, faPlus, faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './TodoInput.module.css';

function TodoInput() {
  const [showToday, setShowToday] = useState(false);
  const [showOverdue, setShowOverdue] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleTodayClick = () => {
    setShowToday(!showToday);
  };

  const handleOverdueClick = () => {
    setShowOverdue(!showOverdue);
  };

  const handleCheckboxChange = (itemName) => {
    setCheckedItems({ ...checkedItems, [itemName]: !checkedItems[itemName] });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h1 className={styles.dashboardHeader}>
          Dashboard
        </h1>
        <ul className={styles.sidebarMenu}>
          <li>
            <h2 className={styles.task}><FontAwesomeIcon icon={faPlus} /> Add Task</h2>
            <ul>
              <li><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search</Link></li>
              <li><Link to="/inbox"><FontAwesomeIcon icon={faInbox} /> Inbox</Link></li>
              <li onClick={handleTodayClick}><FontAwesomeIcon icon={faCalendarDay} /> Today</li>
              <li><Link to="/upcoming"><FontAwesomeIcon icon={faCalendarAlt} /> Upcoming</Link></li>
              <li><Link to="/filters"><FontAwesomeIcon icon={faFilter} /> Filters</Link></li>
              <li><Link to="/labels"><FontAwesomeIcon icon={faTags} /> Labels</Link></li>
            </ul>
          </li>
          <li>
            <h2><FontAwesomeIcon icon={faHome} /> My Projects</h2>
            <ul>
              <li><Link to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        {showToday && (
          <div className={styles.todayContent}>
            <h2>Today</h2>
            <p>3 Tasks</p>
            
            {/* Overdue dropdown */}
            <div className={styles.overdueDropdown}>
              <h3 onClick={handleOverdueClick}>Overdue <FontAwesomeIcon icon={faChevronDown} /></h3>
              {showOverdue && (
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkedItems["Lists"]}
                        onChange={() => handleCheckboxChange("Lists")}
                      />
                      <p className={checkedItems["Lists"] ? styles.checked : ""}>Lists</p>
                    </label>
                    <p>3 Tasks</p>
                    <FontAwesomeIcon icon={faCalendarAlt} /> Yesterday
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkedItems["Linked List"]}
                        onChange={() => handleCheckboxChange("Linked List")}
                      />
                      <p className={checkedItems["Linked List"] ? styles.checked : ""}>Linked List</p>
                    </label>
                     Yesterday
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkedItems["Aptitude"]}
                        onChange={() => handleCheckboxChange("Aptitude")}
                      />
                      <p className={checkedItems["Aptitude"] ? styles.checked : ""}>Aptitude</p>
                    </label>
                     Yesterday
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={styles.viewSettings}>
        <h2 className={styles.view}>
          <FontAwesomeIcon icon={faCog} />
          View
        </h2>
      </div>
    </div>
  );
}

export default TodoInput;
