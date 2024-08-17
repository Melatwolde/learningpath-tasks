'use client';

import { getSession} from "next-auth/react";
import { useEffect, useState } from "react";

interface Session {
    user: {
        name: string;
        email: string;
    };
    expires: string;
}
const MembersPage = () => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            const initialSession = await getSession();
            setSession(initialSession as Session);
            setLoading(false);
        };

        fetchSession();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!session) {
        return <div>You are not authenticated.</div>;
    }

    return (
        <div>
            <h1>Members Page</h1>
            {/* Render your content here */}
        </div>
    );
};

export default MembersPage;