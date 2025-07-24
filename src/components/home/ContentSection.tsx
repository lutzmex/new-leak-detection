import React, { memo } from 'react';

// Memoized section component
const ContentBlock = memo(({ 
  title, 
  children, 
  isH2 = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  isH2?: boolean;
}) => {
  const HeadingComponent = isH2 ? 'h2' : 'h3';
  const headingClass = isH2 
    ? "font-poppins font-medium text-lg sm:text-xl lg:text-2xl text-slate-900 leading-tight mb-6" 
    : "font-poppins font-medium text-base sm:text-lg lg:text-xl text-slate-800 mb-4 sm:mb-6";

  return (
    <div>
      <HeadingComponent className={headingClass}>
        {title}
      </HeadingComponent>
      {children}
    </div>
  );
});

ContentBlock.displayName = 'ContentBlock';

const ContentSection: React.FC = memo(() => {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <h2 className="font-poppins font-medium text-lg sm:text-xl lg:text-2xl text-slate-900 leading-tight">
            Professional Leak Detection Services Discount Leak Detection Serves All 50 States
          </h2>

          {/* Main intro paragraph */}
          <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
            Discount Leak Detection is America's trusted leak detection company serving homeowners and businesses coast to coast. Our certified technicians use advanced tools to find water, gas, pool, and slab leaks. We do it without damaging your property. We've helped thousands of customers save money and prevent costly repairs across the United States.
          </p>

          {/* Extended Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Section 1 */}
            <ContentBlock title="We Find Hidden Leaks Quickly Without Breaking Your Home">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Our technicians have cool gadgets that hear water dripping inside walls. They can also spot hot spots where pipes leak. We don't have to break your tiles or dig big holes in your yard to find problems.
              </p>
            </ContentBlock>

            {/* Section 2 */}
            <ContentBlock title="We Work on Houses and Stores From Coast to Coast">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Our team has been doing this job for more than 25 years. We've helped fix over 50,000 leaks for people who needed help. We go to small houses, big office buildings, and everything else too.
              </p>
            </ContentBlock>

            {/* Section 3 */}
            <ContentBlock title="Call Us Anytime, Day or Night We Answer Right Away">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Pipes don't care what time it is when they break. That's why our phone works all day and all night, even on Christmas and weekends. Someone will always pick up when you call us.
              </p>
            </ContentBlock>

            {/* Section 4 */}
            <ContentBlock title="We Check All Kinds of Leaks Water, Gas, Pools, and More">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Our workers know how to find problems with water pipes, gas lines, swimming pools, hot tubs, and sprinkler systems. We travel to every state in America to help people fix their leak problems.
              </p>
            </ContentBlock>

            {/* Section 5 */}
            <ContentBlock title="House Water Leak Help All Over America">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                When water leaks behind your bathroom wall or under your kitchen floor, we can find it fast. Our listening tools work like a doctor's stethoscope but for pipes. We fix the problem and clean up after ourselves.
              </p>
            </ContentBlock>

            {/* Section 6 */}
            <ContentBlock title="Swimming Pool Leak Help in Every State">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Pool owners in hot areas like Arizona and Florida call us when their pools lose water. We add special dye to the water to see where it's leaking. Most times, we can fix it the same day.
              </p>
            </ContentBlock>

            {/* Section 7 */}
            <ContentBlock title="Under-Floor Leak Problems in Concrete Houses">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Some homes in Texas and other hot states have water pipes under the concrete floor. When these pipes break, your water bill can rise fast. We use sound machines to find the exact spot without breaking your floor.
              </p>
            </ContentBlock>

            {/* Section 8 */}
            <ContentBlock title="Gas Leak Safety Help to Keep Families Safe">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Gas leaks are scary and dangerous for your family. Our trained workers carry special sniffers that detect gas even when you can't. We work with your local fire department to keep everyone safe.
              </p>
            </ContentBlock>

            {/* Section 9 */}
            <ContentBlock title="Underground Pipe Problems for Farms and Hotels">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Farmers and hotel owners lose a lot of money when underground pipes leak. We use special probes that enter the ground to find broken pipes without digging up the whole yard.
              </p>
            </ContentBlock>

            {/* Section 10 */}
            <ContentBlock title="Store and Office Building Leak Help">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Restaurant owners and shop managers count on us when their pipes act up. We test all water lines that feed sinks, toilets, and machines. We work at night so your business can stay open during the day.
              </p>
            </ContentBlock>

            {/* Section 11 */}
            <ContentBlock title="Finding Leaks Early Saves You Big Money">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                A tiny leak today can become a costly mess tomorrow. We've seen customers save thousands because we catch leaks early. It's way cheaper to fix a small leak than replace a whole floor or wall.
              </p>
            </ContentBlock>

            {/* Section 12 */}
            <ContentBlock title="We Help Save Water for Everyone">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                Water costs more every year, and some areas face shortages. Leaks waste over one trillion gallons of water in the U.S. every year. That is like filling 1.5 million swimming pools and throwing the water away.
              </p>
            </ContentBlock>

            {/* Section 13 */}
            <ContentBlock title="You Get Pictures and Reports of What We Find">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                After finding your leak, we take pictures and note every step. We explain the issue in simple words so you understand. Insurance companies like our clear reports when you file a claim.
              </p>
            </ContentBlock>

            {/* Section 14 */}
            <ContentBlock title="Local Workers in Every State Who Know Your Area">
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                We hire workers who live in your state and know local weather and building rules. They know if pipes might freeze in winter or if shifting soil could cause breaks.
              </p>
            </ContentBlock>

            {/* New H2 Section 1 */}
            <ContentBlock title="Advanced Leak Detection Technology Non Invasive Methods by Discount Leak Detection" isH2>
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed mb-8">
                At Discount Leak Detection, we use the latest technology to serve customers across the U.S. Our non invasive methods let us find hidden leaks without breaking walls or digging yards. From acoustic tools to thermal imaging, our equipment finds leaks fast and accurately.
              </p>

              <div className="space-y-6">
                <ContentBlock title="Special Listening Machines That Hear Water Dripping">
                  <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                    Our listening machines work like super-powered ears that can hear water moving inside your walls. We place them on floors and walls to pinpoint the leak. It's like playing hot and cold, but with sound.
                  </p>
                </ContentBlock>

                <ContentBlock title="Heat Cameras That See Temperature Changes">
                  <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                    We have cameras that see heat, like X-ray vision for pipes. When water leaks, some spots get cooler or warmer than others. Our cameras show these spots as color changes on a screen.
                  </p>
                </ContentBlock>

                <ContentBlock title="Ground Radar That Looks Under Concrete">
                  <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                    This machine sends signals into the ground and tells us what's below. It can see pipes, water, and empty spaces under your driveway or basement floor. It's like having X-ray glasses for the ground.
                  </p>
                </ContentBlock>
              </div>
            </ContentBlock>

            {/* New H2 Section 2 */}
            <ContentBlock title="Why Choose Discount Leak Detection America's Most Trusted Leak Detection Company" isH2>
              <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed mb-8">
                Discount Leak Detection has built a reputation as America's leading leak detection service through decades of reliable, honest work. We combine family-owned values with professional expertise, licensed technicians, and a money-back guarantee. Our customers choose us because we deliver results, offer fair prices, and put their needs first.
              </p>

              <div className="space-y-6">
                <ContentBlock title="We're a Family Business That Really Cares">
                  <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                    We started as a small family business, and we still treat every customer like family. We never sell you things you don't need. We fix your problem and charge a fair price.
                  </p>
                </ContentBlock>

                <ContentBlock title="Our Workers Have Licenses and Insurance">
                  <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                    Every worker who visits your home has passed tests and holds the required licenses. We also carry insurance to protect you if something goes wrong. You can see license numbers on our trucks.
                  </p>
                </ContentBlock>

                <ContentBlock title="We Promise Our Work or Give Your Money Back">
                  <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                    If we can't find your leak or you are not happy, we will refund your money. We have done this for years and know we can fix your problem the right way.
                  </p>
                </ContentBlock>

                <ContentBlock title="Fast Service That Fits Your Schedule">
                  <p className="font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                    We know you are busy and don't want to wait all day. We give you a time window for our arrival and we stick to it. Most leak detections take just a few hours to finish.
                  </p>
                </ContentBlock>
              </div>
            </ContentBlock>
          </div>
        </div>
      </div>
    </section>
  );
});

ContentSection.displayName = 'ContentSection';

export default ContentSection;