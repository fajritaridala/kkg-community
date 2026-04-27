import MemberCard from '../../components/Card/Member'

export default function Membership() {
  return (
    <section className="pt-14">
      {/* hero section start */}
      <div className="my-18 flex w-full items-center-safe md:px-14">
        <div className="w-full space-y-4 md:w-1/2">
          <h1 className="text-center md:text-left text-3xl font-bold capitalize text-shadow-foreground md:text-4xl">
            keanggotaan
          </h1>
          <p className="hidden w-sm text-sm text-foreground-muted first-letter:capitalize md:block">
            kepengurusan Kelompok Kerja Guru gugus 1 R. A. Kartini berdedikasi
            untuk memajukan pendidikan dan profesionalisme pendidik melalui
            kolaborasi yang terstuktur.
          </p>
        </div>
        <div className="hidden w-1/2 md:block">
          <img
            className="mx-auto h-72 w-72"
            src="/ilustration/undraw_team-work_i1f3.svg"
            alt="Team Illustration"
          />
        </div>
      </div>
      {/* hero section end */}

      <div className="mb-18 flex grid-flow-col flex-wrap space-y-8 px-6 md:grid md:gap-6 md:space-y-0 md:px-18">
        <MemberCard
          src="/membership/person.jpg"
          alt="John Doe"
          name="John Doe"
          position="Ketua"
        />
        <MemberCard
          src="/membership/person.jpg"
          alt="John Doe"
          name="John Doe"
          position="Ketua"
        />
        <MemberCard
          src="/membership/person.jpg"
          alt="John Doe"
          name="John Doe"
          position="Ketua"
        />
      </div>
    </section>
  )
}
