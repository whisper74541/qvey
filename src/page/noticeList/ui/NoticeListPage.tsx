import { useEffect, useState } from 'react';
import styles from './NoticeListPage.module.css';


interface Notice {
    id: number;
    type: '공지' | '필독' | '일반';
    title: string;
    writer: string;
    date: string;
    views: number;
    isImportant?: boolean;
}

export default function NoticeListPage() {
    const [notices, setNotices] = useState<Notice[]>([]);

    useEffect(() => {
    // 임시 Mock Data
    setNotices([
        {
        id: 1,
        type: '필독',
        title: '필독! 가이드 규칙 (24-06-27)',
        writer: '운영자',
        date: '2024-06-27',
        views: 2103,
        isImportant: true,
    },
    {
        id: 2,
        type: '공지',
        title: '신규 가입자 활동규칙 안내드립니다.',
        writer: '운영자',
        date: '2024-03-24',
        views: 336,
        isImportant: true,
    },
    {
        id: 3,
        type: '일반',
        title: '첫날에 모든 주민과 인사하는 동선',
        writer: '은성이',
        date: '2025-07-22',
        views: 67,
        },
    ]);
    }, []);

    return (
    <div className={styles.page}>
        <h2 className={styles.title}>공지사항</h2>
        <table className={styles.table}>
        <thead>
            <tr>
            <th>유형</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
            </tr>
        </thead>
        <tbody>
            {notices.map((notice) => (
            <tr
                key={notice.id}
                className={notice.isImportant ? styles.important : ''}
            >
                <td>{notice.type}</td>
                <td className={styles.titleCell}>{notice.title}</td>
                <td>{notice.writer}</td>
                <td>{notice.date}</td>
                <td>{notice.views}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}
