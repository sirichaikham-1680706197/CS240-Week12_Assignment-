const profile = {
  fullName: "ปณต ชินวิวัฒน์กุล",
  studentId: "1680705991",
  section: "227E",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-violet-600 text-5xl font-bold text-white ring-4 ring-violet-200">
          {profile.fullName.charAt(0)}
        </div>
        <h1 className="mb-6 text-2xl font-bold text-slate-900">{profile.fullName}</h1>
        <dl className="divide-y divide-slate-100 text-left text-sm">
          <div className="flex justify-between py-3">
            <dt className="text-slate-500">รหัสนักศึกษา</dt>
            <dd className="font-semibold text-slate-900">{profile.studentId}</dd>
          </div>
          <div className="flex justify-between py-3">
            <dt className="text-slate-500">Section</dt>
            <dd className="font-semibold text-slate-900">{profile.section}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
