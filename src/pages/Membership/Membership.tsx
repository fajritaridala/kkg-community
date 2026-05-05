import { MemberCard } from '../../components'

export default function Membership() {
  return (
    <section className="bg-light py-14">
      {/* hero section start */}
      <div className="my-8 flex w-full items-center-safe md:my-22 md:px-14">
        <div className="w-full space-y-2 px-6 md:w-1/2 md:space-y-4">
          <h1 className="font-sansita text-3xl leading-tight font-bold tracking-tight text-foreground-dark capitalize md:text-left md:text-5xl">
            Tumbuh Bersama Menginspirasi Sesama
          </h1>
          <p className="text-xs leading-relaxed text-foreground first-letter:capitalize md:block md:w-lg md:text-sm">
            Berkenalan dengan rekan sejawat, bertukar praktik baik, dan temukan
            ruang tumbuh yang mendukung perjalanan karier Anda sebagai pendidik.
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

      <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-18">
        <MemberCard
          src="/membership/ketua.png"
          alt="Hj. Nurhatma, S.Pd"
          name="Hj. Nurhatma, S.Pd"
          position="ketua"
        />
        <MemberCard
          src="/membership/sekretaris.png"
          alt="Putu Suriyanto, S.Pd"
          name="Putu Suriyanto, S.Pd"
          position="sekretaris"
        />
        <MemberCard
          src="/membership/bendahara.png"
          alt="Ani Indraningsi, S.Pd"
          name="Ani Indraningsi, S.Pd"
          position="bendahara"
        />
      </div>
    </section>
  )
}
