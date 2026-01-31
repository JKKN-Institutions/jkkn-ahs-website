"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function NAACPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs: TabContent[] = [
    {
      id: 'overview',
      title: 'Over View',
      content: (
        <>
          {/* NAAC PDF Button */}
          <div className="mb-8 flex justify-center">
            <a
              href="/pdfs/NAAC-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#0b6d41] text-white rounded-lg font-semibold transition-all hover:bg-[#085231] hover:shadow-lg"
            >
              <FileText className="w-5 h-5" />
              <span>View NAAC Certificate</span>
              <Download className="w-4 h-4" />
            </a>
          </div>

          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Introduction</h2>
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <p>
              India has one of the largest and diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of the higher education. To address these concerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an independent National accreditation agency. Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru. The mandate of NAAC as reflected in its vision statement is in making quality assurance an integral part of the functioning of Higher Education Institutions (HEIs). The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a cross-section of Indian higher education system. The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member-secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities NAAC is advised by the advisory and consultative committees constituted from time to time.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'vision',
      title: 'Vision and Mission',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Vision and Mission</h2>
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <p>
              The vision of NAAC is:<br />
              To make quality the defining element of higher education in India through a combination of self and external quality evaluation, promotion and sustenance initiatives. The mission statements of the NAAC aim at translating the NAAC's vision into action plans and define NAAC's engagement and endeavor as given below: To arrange for periodic assessment and accreditation of institutions of higher education or units thereof, or specific academic programmes or projects;<br />
              To stimulate the academic environment for promotion of quality in teaching-learning and research in higher education institutions; To encourage self-evaluation, accountability, autonomy and innovations in higher education; To undertake quality-related research studies, consultancy and training programmes, and To collaborate with other stakeholders of higher education for quality evaluation, promotion and sustenance. Striving to achieve its goals as guided by its vision and mission statements, NAAC primarily focuses on assessment of the quality of higher education institutions in the country. The NAAC methodology for Assessment and Accreditation is very much similar to that followed by Quality Assurance (QA) agencies across the world and consists of self-assessment by the institution along with external peer assessment organized by NAAC.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'values',
      title: 'Core Values',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Core Values</h2>
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <p>
              Throughout the world, Higher Education Institutions (HEIs) function in a dynamic environment. The need to expand the system of higher education, the impact of technology on the educational delivery, the increasing private participation in higher education and the impact of globalization (including liberal cross-border and trans-national educational imperatives), have necessitated marked changes in the Indian higher education system. These changes and the consequent shift in values have been taken into cognizance by NAAC while formulating the core values. Accordingly, in order to ensure external and internal validity and credibility, the QA process of NAAC is grounded within a value framework which is suitable and appropriate to the National context.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-6">The accreditation framework of NAAC is thus based on five core values detailed below.</h3>

            <h4 className="text-lg font-bold text-gray-800 mt-4">(i) Contributing to National Development:</h4>
            <p>
              Most of the HEIs have a remarkable capacity to adapt to changes and at the same time, pursue the goals and objectives that they have set forth for themselves. Contributing to national development has always been an implicit goal of Indian HEIs. The role of HEIs is significant in human resource development and capacity building of individuals, to cater to the needs of the economy, society and the country as a whole, thereby, contributing to the development of the Nation. Serving the cause of social justice, ensuring equity and increasing access to higher education are a few ways by which HEIs can contribute to the national development. It is therefore appropriate that the Assessment and Accreditation (A&amp;A) process of NAAC looks into the ways HEIs have been responding to and contributing towards national development.
            </p>

            <h4 className="text-lg font-bold text-gray-800 mt-4">(ii) Fostering Global Competencies among Students:</h4>
            <p>
              The spiraling developments at the global level also warrant that the NAAC includes in its scope of assessment skill development of students, on par with their counterparts elsewhere in the world. With liberalization and globalization of economic activities, the need to develop skilled human resources of a high caliber is imperative. Consequently, the demand for internationally acceptable standards in higher education is evident. Therefore, the accreditation process of NAAC needs to examine the role of HEIs in preparing the students to achieve core competencies, to face the global challenges successfully. This requires that the HEIs be innovative, creative and entrepreneurial in their approach. Towards achieving this, HEIs may establish collaborations with industries, network with the neighborhood agencies/bodies and foster a closer relationship between the "world of competent-learning" and the "world of skilled work".
            </p>

            <h4 className="text-lg font-bold text-gray-800 mt-4">(iii) Inculcating a Value System among Students:</h4>
            <p>
              Although skill development is crucial to the success of students in the job market, skills are of less value in the absence of appropriate value systems. The HEIs have to shoulder the responsibility of inculcating desirable value systems among students. In a country like India, with cultural pluralities and diversities, it is essential that students imbibe the appropriate values commensurate with social, cultural, economic and environmental realities, at the local, national and universal levels. Whatever be the pluralities and diversities that exist in the country, there is a persisting concern for inculcating the core universal values like truth and righteousness apart from other values emphasized in the various policy documents of the country. The seeds of values such as cooperation and mutual understanding during the early stages of education have to be reiterated and re-emphasized at the higher education also through appropriate learning experiences and opportunities. The NAAC assessment therefore examines how these essential and desirable values are being inculcated in the students, by the HEIs.
            </p>

            <h4 className="text-lg font-bold text-gray-800 mt-4">(iv) Promoting the Use of Technology:</h4>
            <p>
              Most of the significant developments that one can observe today can be attributed to the impact of Science and Technology. While the advantages of using modern tools and technological innovations in the day-to-day-life are well recognized, the corresponding changes in the use of new technologies, for teaching learning and governance of HEIs, leaves much to be desired. Technological advancement and innovations in educational transactions have to be undertaken by all HEIs, to make a visible impact on academic development as well as administration. At a time when our educational institutions are expected to perform as good as their global partners, significant technological innovations have to be adopted. Traditional methods of delivering higher education have become less motivating to a large number of students. To keep pace with the developments in other spheres of human endeavor, HEIs have to enrich the learning experiences of their students by providing them with state-of-the-art educational technologies. The campus community must be adequately prepared to make use of Information and Communication Technology (ICT) optimally. Conscious effort is also needed to invest in hardware and to orient the faculty suitably.
            </p>
            <p>
              In addition to using technology as a learning resource, managing the activities of the institution in a technology-enabled way will ensure effective institutional functioning. For example, documentation and data management in the HEIs are areas where the process of assessment by NAAC has made a significant impact. Moving towards electronic data management and having institutional website to provide ready and relevant information to stakeholders are desirable steps in this direction. In other words, effective use of ICT in HEIs will be able to provide ICT literacy to the campus community, using ICT for resource sharing and networking, as well as adopting ICT-enabled administrative processes. Therefore, NAAC accreditation would look at how the HEIs have put in place their electronic data management systems and electronic resources and their access to internal and external stakeholders particularly the student community.
            </p>

            <h4 className="text-lg font-bold text-gray-800 mt-4">(v) Quest for Excellence:</h4>
            <p>
              Contributing to nation-building and skills development of students, HEIs should demonstrate a drive to develop themselves into centres of excellence. Excellence in all that they will contribute to the overall development of the system of higher education of the country as a whole. This 'Quest for Excellence' could start with the assessment or even earlier, by the establishment of the Steering Committee for the preparation of the Self – Study Report (SSR) of an institution. Another step in this direction could be the identification of the strengths and weaknesses in the teaching and learning processes as carried out by the institution.
            </p>
            <p>
              The five core values as outlined above form the foundation for assessment of institutions that volunteer for accreditation by NAAC. The HEIs may also add their own core values to these in conformity with the goals and mission.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'assessment',
      title: 'Assessment and Accreditation',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Assessment and Accreditation</h2>
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <p>
              The NAAC has been carrying out the process of quality assessment and accreditation of HEIs over the past two decades. Several HEIs have gone through this process, and a sizeable number has also undergone subsequent cycles of accreditation. True to its commitment for promoting a quality culture in HEIs in consonance with the overall developments in the field of education as well as the outside world, NAAC has strived to be sensitive to these and adequately reflect these in its processes. The A&amp;A process of NAAC continues to be an exercise in partnership of NAAC with the HEI being assessed.
            </p>
            <p>
              As is known by now, the A&amp;A process of NAAC is being revised, and this revision attempts to enhance such a partnership. Over the years, the feedback procured from the HEIs, other stakeholders, and the developments in the national scene – all have contributed to making appropriate revisions in the process so as to accelerate the process with greater quality rigor.
            </p>
            <p className="font-bold text-gray-800">Revised Assessment and Accreditation (A&amp;A) Framework</p>
            <p>
              The Revised Assessment and Accreditation Framework were launched in July 2017. It represents an explicit Paradigm Shift making it ICT enabled, objective, transparent, scalable, and robust. The Shift is:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>from qualitative peer judgement to data-based quantitative indicator evaluation with increased objectivity and transparency</li>
              <li>towards extensive use of ICT confirming scalability and robustness</li>
              <li>in terms of simplification of the process drastic reduction in the number of questions, size of the report, visit days, and so on</li>
              <li>in terms of boosting benchmarking as a quality improvement tool. This has been attempted through the comparison of NAAC indicators with other international QA frameworks</li>
              <li>introducing Pre-qualifier for peer team visit, as 25% of system-generated score</li>
              <li>introducing System Generated Scores (SGS) with a combination of online evaluation of Quantitative metrics and peer judgement of Qualitative metrics.</li>
              <li>introducing the element of third-party validation of data</li>
              <li>providing appropriate differences in the metrics, weightages, and benchmarks to universities, autonomous colleges, and affiliated/constituent colleges</li>
              <li>revising several metrics to bring in enhanced participation of students and alumni in the assessment process</li>
            </ul>
            <p>
              The Revised Assessment and Accreditation Framework were launched in July 2017. It represents an explicit Paradigm Shift making it ICT enabled, objective, transparent, scalable, and robust. After launching the same, several modifications and updates have been carried. Recently, an update of the manual is in line with the NEP-2020 recommendations.
            </p>
            <p>
              Again in January 2022, metrics related to seven criteria including both QnM and QlM have been now reduced to ease the Assessment and Accreditation process of NAAC for Affiliated/Constituent Colleges without compromising the quality aspects in Higher Education. The stakeholders of Higher Education have given their feedback to reduce the degree and magnitude of predicament faced by them during the process of filling their Self Study Report. Accordingly, NAAC has constituted a specialized team to look into the methodology adapted in the Revised Accreditation Framework (RAF), to facilitate all the Higher Education Institutions in the country. The Ministry of Education and University Grants Commission have requested NAAC to go for the ease of doing Accreditation of Higher Education Institutions to reach the unreached, especially in far-flung regions from different parts of the country.
            </p>
            <p className="font-bold text-gray-800">Focus of Assessment</p>
            <p>
              The NAAC continues with its focus on the quality culture of the institution in terms of Quality Initiatives, Quality Sustenance, and Quality Enhancement, as reflected in its vision, organization, operations, and the processes. Experience has reiterated that these can be ascertained either by on-site observations and/or through the facts and figures about the various aspects of institutional functioning. The Revised Manual places greater confidence in the latter as reflective of internal institutional processes.
            </p>
            <p>
              In line with NAAC's conviction that quality concerns are institutional, Quality Assessment (QA) can better be done through self-evaluation. The self-evaluation process and the subsequent preparation of the Self Study Report (SSR) to be submitted to NAAC involves the participation of all the stakeholders – management, faculty members, administrative staff, students, parents, employers, community, and alumni. While the participation of internal stakeholders i.e. management, staff, and students provide credibility and ownership to the activity and could lead to newer initiatives, interaction with external stakeholders facilitates the development process of the institution and their educational services. Overall, the QA is expected to serve as a catalyst for institutional self-improvement, promote innovation, and strengthen the urge to excel.
            </p>
            <p>
              It is attempted to enlarge the digital coverage of the entire process of A&amp;A. This, it is believed, will not only accelerate the process but also bring in greater objectivity into the process. The possible differentiation required concerning HEIs going for subsequent cycles of A&amp;A, appropriate scope has been provided in the process. This will allow the HEIs to appropriately represent the developments they have attempted after the previous A&amp;A cycle.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'framework',
      title: 'Quality Indicator Framework',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Quality Indicator Framework</h2>
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <p>
              The criteria-based assessment forms the backbone of the A&amp;A process of NAAC. The seven criteria represent the core functions and activities of a HEI. In the revised framework, not only the academic and administrative aspects of institutional functioning but also the emerging issues have been included. The seven Criteria to serve as a basis for the assessment of HEIs are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Curricular Aspects</strong></li>
              <li><strong>Teaching-Learning and Evaluation</strong></li>
              <li><strong>Research, Innovations, and Extension</strong></li>
              <li><strong>Infrastructure and Learning Resources</strong></li>
              <li><strong>Student Support and Progression</strong></li>
              <li><strong>Governance, Leadership, and Management</strong></li>
              <li><strong>Institutional Values and Best Practices</strong></li>
            </ul>
            <p>
              Under each Criterion, a few Key Indicators are identified. These Key Indicators (KIs) are further delineated as Metrics which actually elicit responses from the HEIs. These seven criteria along with their KIs are given below, explicating the aspects they represent.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'criterion1',
      title: 'Criterion I',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Curricular Aspects</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">1.1 Curricular Planning and Implementation</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">1.1.1<br />QlM</td>
                      <td className="border border-gray-300 px-4 py-3">The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">1.2 – Academic Flexibility</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">1.2.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Number of Add on /Certificate/Value added programs offered and online MOOC programs like SWAYAM, NPTEL etc. where the students of the institution have benefitted during the last five years)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">1.2.2 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of students enrolled in Certificate/ Add-on/Value added programs and also completed online MOOC programs like SWAYAM, NPTEL etc.as against the total number of students during the last five years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">1.3 – Curriculum Enrichment</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">1.3.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability in transacting the Curriculum.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">1.3.2 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of students undertaking project work/field work/internships (Data for the latest completed academic year)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">1.4 Feedback System</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">1.4.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'criterion2',
      title: 'Criterion II',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Teaching Learning and Evaluation</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">2.1 – Student Enrolment and Profile</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.1.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Enrolment percentage</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.1.2 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, etc. as per applicable reservation policy) during the last five years (Exclusive of supernumerary seats)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">2.2 – Student Teacher Ratio</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.2.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Student – Full time Teacher Ratio (Data for the latest completed academic year)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">2.3 – Teaching-Learning Process</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.3.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Student centric methods, such as experiential learning, participative learning, and problem-solving methodologies are used for enhancing learning experiences using ICT tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">2.4 – Teacher Profile and Quality</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.4.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of full-time teachers against sanctioned posts during the last five years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.4.2 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of full-time teachers with NET/SET/SLET/ Ph. D./D.Sc./D.Litt. during the last five years (consider only the highest degree for count)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">2.5 – Evaluation Process and Reforms</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.5.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Mechanism of internal/external assessment is transparent, and the grievance redressal system is time-bound and efficient</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">2.6 – Student Performance and Learning Outcome</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.6.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on the website, and attainment of POs and COs are evaluated</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.6.2 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Attainment of POs and COs are evaluated.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.6.3 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Pass percentage of Students during the last five years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">2.7 – Student Satisfaction Survey</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2.7.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Online student satisfaction survey regarding the teaching-learning process. (Online survey to be conducted)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'criterion3',
      title: 'Criterion III',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Research, Innovations and Extension</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">3.1 – Resource Mobilization for Research</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">3.1.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">3.2 – Innovation Ecosystem</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">3.2.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge (patents filed, published, incubation center facilities in the HEI to be considered)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">3.3 – Research Publication and Awards</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">3.3.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Number of research papers published per teacher in the Journals notified on UGC care list during the last five years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">3.4 – Extension Activities</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">3.4.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Extension activities are carried out in the neighborhood community, sensitizing students to social issues, for their holistic development, and impact thereof during the last five years.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">3.5 – Collaboration</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">3.5.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">The number of MoUs, collaborations/linkages for Faculty exchange, Student exchange, Internship, Field project, On-the-job training, research and other academic activities during the last five years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'criterion4',
      title: 'Criterion IV',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Infrastructure and Learning Resources</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">4.1 – Physical Facilities</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">4.1.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Availability of adequate infrastructure and physical facilities viz., classrooms, laboratories, ICT infrastructure, facilities for cultural and sports activities, gymnasium, yoga centre etc. in the institution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">4.2 – Library as a learning Resource</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">4.2.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Library automation using Integrated Library Management System (ILMS), subscription to e-resources including provision of links to OER repositories, amount spent on purchase of books, journals and usage of library</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">4.3 – IT Infrastructure</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">4.3.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">4.4 – Maintenance of Campus Infrastructure</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">4.4.1 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the last five years (INR in Lakhs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'criterion5',
      title: 'Criterion V',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Student Support and Progression</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">5.1 Student Support</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.1.1<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies and philanthropists during last five years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.1.2<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Capacity building and skills enhancement initiatives taken by the institution include the following<br />1. Soft skills<br />2. Language and communication skills<br />3. Life skills (Yoga, physical fitness, health and hygiene)<br />4. ICT/computing skills</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.1.3<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.1.4<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">The Institution has a transparent mechanism for timely redressal of student grievances including sexual harassment and ragging cases<br />1. Implementation of guidelines of statutory/regulatory bodies<br />2. Organisation wide awareness and undertakings on policies with zero tolerance<br />3. Mechanisms for submission of online/offline students' grievances<br />4. Timely redressal of the grievances through appropriate committees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">5.2 Student Progression</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.2.1<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of placement of outgoing students and students progressing to higher education during the last five years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.2.2<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of students qualifying in state/national/ international level examinations during the last five years (eg: JAM/CLAT/GATE/ GMAT/ CAT/ GRE/ TOEFL/ Civil Services/State government examinations)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">5.3 Student Participation and Activities</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.3.1<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Number of awards/medals for outstanding performance in sports/cultural activities at University / state/ national / international level (award for a team event should be counted as one) during the last five years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.3.2<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">5.4 Alumni Engagement</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">5.4.1<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'criterion6',
      title: 'Criterion VI',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Governance, Leadership and Management</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">6.1 Institutional Vision and Leadership</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.1.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">The governance and leadership is in accordance with vision and mission of the institution and it is visible in various institutional practices such as decentralization and participation in the institutional governance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">6.2 Strategy Development and Deployment</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.2.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, deployment of institutional Strategic/perspective/development plan etc</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.2.2 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Implementation of e-governance in areas of operation<br />1. Administration<br />2. Finance and Accounts<br />3. Student Admission and Support<br />4. Examination</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">6.3 Faculty Empowerment Strategies</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.3.1<br />QlM</td>
                      <td className="border border-gray-300 px-4 py-3">The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.3.2<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.3.3<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), professional development /administrative training programs during the last five years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">6.4 Financial Management and Resource Mobilization</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.4.1<br />QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/ non-government organizations) and it conducts financial audits regularly (internal and external)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">6.5 Internal Quality Assurance System</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.5.1<br />QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures &amp; methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">6.5.2<br />QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Quality assurance initiatives of the institution include:<br />1. Regular meeting of Internal Quality Assurance Cell (IQAC); Feedback collected, analysed and used for improvements<br />2. Collaborative quality initiatives with other institution(s)/membership of international networks<br />3. Participation in NIRF<br />4. any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA etc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'criterion7',
      title: 'Criterion VII',
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-[#003f13] mb-6">Institutional Values and Best Practices</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">7.1 Institutional Values and Social Responsibilities</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">7.1.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">7.1.2 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">The Institution has facilities and initiatives for<br />1. Alternate sources of energy and energy conservation measures<br />2. Management of the various types of degradable and non-degradable waste<br />3. Water conservation<br />4. Green campus initiatives<br />5. Disabled-friendly, barrier-free environment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">7.1.3 QnM</td>
                      <td className="border border-gray-300 px-4 py-3">Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following<br />1. Green audit / Environment audit<br />2. Energy audit<br />3. Clean and green campus initiatives<br />4. Beyond the campus environmental promotion and sustainability activities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">7.1.4 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic diversity and Sensitization of students and employees to the constitutional obligations: values, rights, duties and responsibilities of citizens (Within 500 words)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">7.2 Best Practices</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">7.2.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">7.3 Institutional Distinctiveness</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">7.3.1 QlM</td>
                      <td className="border border-gray-300 px-4 py-3">Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbee]">
      <Navbar />

      <main className="flex-grow pt-4 md:pt-20 lg:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-black text-[#0b6d41] uppercase tracking-wide text-center mb-2">
              NAAC
            </h1>
            <p className="text-center text-gray-600 text-lg">
              National Assessment and Accreditation Council
            </p>
          </motion.div>

          {/* Tab Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-8 lg:items-start"
          >
            {/* Tabs Navigation - Left Side */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-32">
                <div className="flex flex-col">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-left font-semibold transition-all duration-300 border-l-4 ${
                        activeTab === tab.id
                          ? 'bg-[#0b6d41] text-white border-[#085231]'
                          : 'bg-white text-gray-700 border-transparent hover:bg-gray-50 hover:border-[#0b6d41]'
                      }`}
                    >
                      {tab.title}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content - Right Side */}
            <div className="lg:w-3/4">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-h-[calc(100vh-180px)] overflow-y-auto"
                style={{ scrollbarWidth: 'thin' }}
              >
                {tabs.find(tab => tab.id === activeTab)?.content}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
