import MemberCard from '../../components/Card/Member'

export default function Membership() {
  return (
    <section className="bg-light py-14">
      {/* hero section start */}
      <div className="my-22 flex w-full items-center-safe md:px-14">
        <div className="w-full space-y-4 md:w-1/2">
          <h1 className="text-center text-3xl font-bold tracking-tight capitalize text-shadow-foreground md:text-left md:text-5xl">
            keanggotaan
          </h1>
          <p className="hidden w-lg text-base leading-relaxed text-foreground-muted first-letter:capitalize md:block">
            kepengurusan Kelompok Kerja Guru gugus 1 R. A. Kartini berdedikasi
            untuk memajukan pendidikan dan profesionalisme pendidik melalui
            kolaborasi yang terstuktur.
          </p>
        </div>
        <div className="hidden w-1/2 md:block">
          <img
            className="mx-auto h-80 w-80"
            src="/ilustration/undraw_team-work_i1f3.svg"
            alt="Team Illustration"
          />
        </div>
      </div>
      {/* hero section end */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-18">
        <MemberCard
          src="/membership/person.jpg"
          alt="John Doe"
          name="John Doe"
          position="ketua"
        />
        <MemberCard
          src="/membership/person.jpg"
          alt="John Doe"
          name="John Doe"
          position="sekretaris"
        />
        <MemberCard
          src="/membership/person.jpg"
          alt="John Doe"
          name="John Doe"
          position="bendahara"
        />
      </div>
    </section>
  )
}
