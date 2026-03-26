import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { db, auth } from '../firebase';
import { Loader2, LogOut } from 'lucide-react';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setApplications([]);
      setMessages([]);
      return;
    }

    const qApps = query(collection(db, 'applications'), orderBy('createdAt', 'desc'));
    const unsubscribeApps = onSnapshot(qApps, (snapshot) => {
      setApplications(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setError(null);
    }, (err) => {
      console.error(err);
      setError("You don't have permission to view this data. Make sure you are logged in as the admin (reelscast341@gmail.com).");
    });

    const qMsgs = query(collection(db, 'contact_messages'), orderBy('createdAt', 'desc'));
    const unsubscribeMsgs = onSnapshot(qMsgs, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => {
      console.error(err);
    });

    return () => {
      unsubscribeApps();
      unsubscribeMsgs();
    };
  }, [user]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setError(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) {
    return <div className="min-h-screen bg-[#050505] flex items-center justify-center"><Loader2 className="animate-spin text-gold" size={48} /></div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#050505] pt-32 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-serif text-white mb-8">Admin Dashboard</h1>
        <p className="text-gray-400 mb-8 max-w-md text-center">
          Please log in with your admin email (reelscast341@gmail.com) to view submitted applications and messages.
        </p>
        <button onClick={handleLogin} className="bg-gold text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors">
          Login with Google
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-24 px-4 md:px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-6 gap-4">
          <h1 className="text-4xl font-serif text-white">Admin Dashboard</h1>
          <div className="flex items-center gap-4 bg-[#0a0a0a] px-4 py-2 border border-white/10 rounded-full">
            <span className="text-gray-400 text-sm">{user.email}</span>
            <button onClick={handleLogout} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 border-l border-white/10 pl-4">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500/50 text-red-200 p-4 mb-8 rounded-sm">
            {error}
          </div>
        )}

        <div className="space-y-16">
          {/* Applications */}
          <section>
            <h2 className="text-2xl font-serif text-gold mb-6 flex items-center gap-3">
              Recent Applications 
              <span className="bg-gold/20 text-gold text-sm px-3 py-1 rounded-full">{applications.length}</span>
            </h2>
            <div className="overflow-x-auto border border-white/10 rounded-sm">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="text-xs text-gray-500 uppercase bg-[#0a0a0a] border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Age/Height</th>
                    <th className="px-6 py-4">City</th>
                    <th className="px-6 py-4">Contact</th>
                    <th className="px-6 py-4">Experience</th>
                    <th className="px-6 py-4">Instagram</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="bg-[#050505] border-b border-white/5 hover:bg-[#0a0a0a] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {app.createdAt ? new Date(app.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4 font-medium text-white">{app.name}</td>
                      <td className="px-6 py-4">{app.age} yrs / {app.height} cm</td>
                      <td className="px-6 py-4">{app.city}</td>
                      <td className="px-6 py-4">
                        <div>{app.email}</div>
                        <div className="text-gold">{app.phone}</div>
                      </td>
                      <td className="px-6 py-4 capitalize">{app.experience}</td>
                      <td className="px-6 py-4">
                        {app.instagram ? <a href={`https://instagram.com/${app.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-gold hover:underline">{app.instagram}</a> : '-'}
                      </td>
                    </tr>
                  ))}
                  {applications.length === 0 && !error && (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500 bg-[#0a0a0a]">No applications yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Messages */}
          <section>
            <h2 className="text-2xl font-serif text-gold mb-6 flex items-center gap-3">
              Contact Messages
              <span className="bg-gold/20 text-gold text-sm px-3 py-1 rounded-full">{messages.length}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-[#0a0a0a] border border-white/10 p-6 hover:border-gold/30 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-medium">{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="text-gold text-sm hover:underline">{msg.email}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {msg.createdAt ? new Date(msg.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                  <h4 className="text-gray-300 font-medium mb-2">{msg.subject}</h4>
                  <p className="text-gray-400 text-sm whitespace-pre-wrap">{msg.message}</p>
                </div>
              ))}
              {messages.length === 0 && !error && (
                <div className="col-span-full text-center py-12 text-gray-500 border border-white/5 bg-[#0a0a0a]">
                  No messages yet.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
