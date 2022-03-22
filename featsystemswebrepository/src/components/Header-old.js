import React from "react";
import logo from '../images/logo.svg';
import rightArrow from '../images/right-arrow.svg';
import externalmg from '../images/external-link.svg'
import { ExternalLink } from 'react-external-link';
import '../css/Header.css';
import Contact from './Contact';
import Home from './home';
import Pigeon from './pigeon';
import FiboChatbot from "./fibo-chatbot";
import Pigeonicqrs from "./pigeoniCQRS";
import Botasaservice from "./bot-as-a-service";
import Automationsolutions from "./automation-solutions";
import Byprocess from "./by-process";
import Managingbotservices from "./managing-bot-eco-system-services";
import Centerofexcellence from "./center-of-excellence";
import ConsultingServices from "./consulting-services";
import TrainingServices from "./training-services";
import LicensingServices from "./licensing-services";
import WhatIsRpa from "./what-is-rpa";
import WhatIsAi from "./what-is-ai";
import WhatIsocr from "./what-is-ocr";
import WhatIsbpm from "./what-is-bpm";
import WhatIsiot from "./what-is-iot";
import PigeonPricing from "./pigeon-pricings";
import IrisPricings from "./iris-pricings";
import TechnologyPartner from "./technology-partner";
import UiPath from './uipath';
import AutomationAnywhere from './automation-anywhere';
import MicrosoftFlow from './microsoft-flow';
import AboutFeat from './about';
import VisionMission from './vision-mission';
import QualityPolicy from './quality-policy';
import CustomerSuccessStories from './customer-success-stories';
import UseCaseLibrary from './use-case-library';
import RpaFinanceAndBanking from './finance-and-banking/rpa-finance-and-banking';

import ChequeProcessing from './finance-and-banking/case-studies/cheque-processing-automation';
import NPAReportAutomation from './finance-and-banking/case-studies/potential-npa-report-automation';
import InvoiceProcessingAutomation from './finance-and-banking/case-studies/invoice-processing-automation';
import BankSettlementAutomation from './finance-and-banking/case-studies/bank-settlement-reconciliation-automation';
import UPIandIMPSAutomation from './finance-and-banking/case-studies/upi-imps-complaints-automation';
import ATMComplaintsAutomation from './finance-and-banking/case-studies/atm-complaints-automation';
import EMIForeclosureAutomation from './finance-and-banking/case-studies/emi-foreclosure';
import CMSComplaintsDownload from './finance-and-banking/case-studies/cms-complaints-download';
import PreauditPreparationAutomation from './finance-and-banking/case-studies/pre-audit-preparation-automation';
import ATMReconciliationAutomation from './finance-and-banking/case-studies/atm-reconciliation-automation';
import NonMaintenanceChargeReversalProcess from './finance-and-banking/case-studies/non-maintenance-charge-reversal-process';
import CPGRAMSComplaintsAutomation from './finance-and-banking/case-studies/cpgrams-complaints-automation';
import CMSComplaintsUploadAutomation from './finance-and-banking/case-studies/cms-complaints-upload-automation';
import AccountOpeningProcess from './finance-and-banking/case-studies/account-opening-process';
import CustomerSupportAutomation from './finance-and-banking/case-studies/customer-support-automation';
import CKYCUploadAutomation from './finance-and-banking/case-studies/ckyc-upload-automation';
import OTSRepaymentProcessAutomation from './finance-and-banking/case-studies/ots-repayment-process-automation';
import CRMprocessAutomation from './finance-and-banking/case-studies/crm-process-automation';
import DuplicateStatementAutomation from './finance-and-banking/case-studies/duplicate-credit-card-statement-automation';
import NeftRtgsReportsAutomation from './finance-and-banking/case-studies/neft-rtgs-reports-automation';
import CustomerServicesProcess from './finance-and-banking/solutions/customer-service';
import KYCprocess from './finance-and-banking/solutions/ekyc-process';
import ReportAutomationProcess from './finance-and-banking/solutions/report-automation';
import AccountClosureProcess from './finance-and-banking/solutions/account-closure-process';
import MFreconciliationProcess from './finance-and-banking/solutions/mf-reconciliation-process';
import ComplianceProcess from './finance-and-banking/solutions/compliance';
import AccountPayableProcess from './finance-and-banking/solutions/accounts-payable';
import GeneralLedgerProcess from './finance-and-banking/solutions/general-ledger';
import CreditCardProcess from './finance-and-banking/solutions/credit-card-processing';
import MortgageProcess from './finance-and-banking/solutions/mortgage-processing';
import FraudDetectionProcess from './finance-and-banking/solutions/fraud-detection';
import RpaForInsurance from './rpa-Insurance/rpa-insurance';
import InsuranceClaimProcess from './rpa-Insurance/case-studies/insurance-claim-process';
import TPAInsuranceCorporateCredit from './rpa-Insurance/case-studies/tpa-insurance-and-corporate-credit-business';
import UnderwritingProcessInsurance from './rpa-Insurance/solutions/new-business-and-underwriting';
import ClaimingprocessInsurance from './rpa-Insurance/solutions/claims-processing';
import BusinessandProcessAnalytics from './rpa-Insurance/solutions/business-and-process-analytics';
import ManualDataEntry from './rpa-Insurance/solutions/manual-data-entry-process';
import UsageLegacyApplication from './rpa-Insurance/solutions/usage-of-legacy-applications';
import RegulatoryCompliance from './rpa-Insurance/solutions/regulatory-compliance';
import PolicyCancellationProcess from './rpa-Insurance/solutions/policy-cancellation';
import RpaForRetail from './rpa-retail/rpa-retail';
import WaybillReconciliationAutomation from './rpa-retail/case-studies/invoice-eway-bill-reconciliation-automation';
import InvoicePostingProcessAutomation from './rpa-retail/case-studies/invoice-posting-process-automation';
import MasterDataManagement from './rpa-retail/solutions/master-data-management';
import GoodReceiptMatching from './rpa-retail/solutions/invoice-to-good-receipt-matching';
import ReturnProcessing from './rpa-retail/solutions/return-processing';
import WorkflowManagement from './rpa-retail/solutions/workflow-management';
import CustomerSupportManagement from './rpa-retail/solutions/customer-support-management';
import ERPManagement from './rpa-retail/solutions/erp-management';
import AccountingAndFinance from './rpa-retail/solutions/accounting-and-finance';
import DemandSupplyPlanning from './rpa-retail/solutions/demand-and-supply-planning';
import MarketingBehaviorAnalysis from './rpa-retail/solutions/marketing-and-consumer-behavior-analysis';
import LogisticsSupplyChainManagement from './rpa-retail/solutions/logistics-and-supply-chain-management';
import RpaForManufacturing from './rpa-manufacturing/rpa-manufacturing';
import RpaForHealthcare from './rpa-healthcare/rpa-healthcare';
import PatientRegistration from './rpa-healthcare/solutions/patient-registration';
import ScheduleAppointment from './rpa-healthcare/solutions/schedule-appointment';
import HealthcareWorkflowManagement from './rpa-healthcare/solutions/healthcare-workflow-management';
import DischargeInstructionProcess from './rpa-healthcare/solutions/discharge-instructions';
import BetterCareCycle from './rpa-healthcare/solutions/better-care-cycle';
import BetterMediclaimProcess from './rpa-healthcare/solutions/mediclaim';
import AuditProcedures from './rpa-healthcare/solutions/audit-procedures';
import RPAforMedia from './rpa-media/rpa-media';
import VendorContractRenewal from './rpa-media/case-studies/vendor-contract-renewal-automation';
import AircheckProcessAutomation from './rpa-media/case-studies/aircheck-process-automation';
import ToProcessAutomation from './rpa-media/case-studies/to-process-automation';
import OrderProcessing from './rpa-media/solutions/order-processing';
import DailyReportProcess from './rpa-media/solutions/daily-report-process';
import RpaForAirline from './rpa-airline/rpa-airline';
import JPRefundForUBR from './rpa-airline/case-studies/jp-refund-for-ubr';
import AmexCobrandAutomation from './rpa-airline/case-studies/amex-cobrand-member-enrollment-automation';
import RpaForLogistics from './rpa-logistics/rpa-logistics';
import CashApplicationAutomation from './rpa-logistics/case-studies/cash-application';
import RpaForHr from './rpa-human-resource/rpa-human-resource';
import OnlineJobPosting from './rpa-human-resource/case-studies/online-job-posting';
import CandidateSourcingAutomation from './rpa-human-resource/case-studies/candidate-sourcing-and-screening';
import PostingEmployeeAutomation from './rpa-human-resource/case-studies/posting-employee-training-details';
import BackgroundVerificationAutomation from './rpa-human-resource/case-studies/employee-background-verification';
import ItInfrastructure from './it-infrastructure/it-infrastructure';
import PasswordResetAutomation from './it-infrastructure/case-studies/password-reset-in-active-directory-automation';
import NetworkProcessingAutomation from './it-infrastructure/case-studies/network-outage-ticket-processing-automation';
import RouterConfigurationAutomation from './it-infrastructure/case-studies/cisco-router-configuration-automation';
import EmployeeAccessAutomation from './it-infrastructure/case-studies/employee-access-creation-automation';
import MemoryUtilizationAutomation from './it-infrastructure/case-studies/memory-utilization-check-automation';
import VirtualMachineAutomation from './it-infrastructure/case-studies/virtual-machine-creation-automation';
import IOSServerRestartAutomation from './it-infrastructure/case-studies/ios-server-restart-automation';
import SwitchConfigurationAutomation from './it-infrastructure/case-studies/cisco-switch-configuration-migration-automation';
import CUCMAutomation from './it-infrastructure/case-studies/cisco-unified-call-manager-installation';
import PhysicaltoVirtualAutomation from './it-infrastructure/case-studies/physical-to-virtual-machine-creation-automation';
import PrintingConfiguration from './it-infrastructure/solutions/printing-configuration';
import ChangePasswordAutomation from './it-infrastructure/solutions/change-password';
import EmailMigrationAutomation from './it-infrastructure/solutions/email-migration';
import NetworkFileSharingAutomation from './it-infrastructure/solutions/network-file-sharing';
import ShrinkFileinSQLServer from './it-infrastructure/solutions/shrink-file-sql-server';
import CpuOptimizationAutomation from './it-infrastructure/solutions/cpu-optimization';
import AutomationSetuProcessDefinition from './automation-setu-process-definition';
import PigeonProcessDefinitions from './pigeon-process-definitions';
import PigeoniVIPS from './pigeoniVIPS';
import FeatBlog from './blog'
import BlogDetails from './blog-details'

import PrivacyPolicy from './privacy-policy'
import TermsOfUse from './terms-of-use'


import { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    withRouter,
    Redirect
} from 'react-router-dom';
import { useState } from 'react';


import '../css/footer.css';
import linkedin from '../images/linkdin.png';
import YouTube from '../images/youtube.png';
import Feattube from '../images/feat-tube-ico.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';


function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)




const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <Router>
            <ScrollToTop>
                <header>
                    <div className="container">
                        <div className="flex align-center">
                            <div className="flex-3">
                                <div className="brand">
                                    <Link to="/Home"><img src={logo} alt="Featsystems Private LTD." /></Link>
                                </div>
                            </div>
                            <div className="flex-10 ml-auto">
                                <div className={`toggleMenu ${isActive ? "active" : ""}`} onClick={toggleClass}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className={`nav-bar ${isActive ? "active" : ""}`}>
                                    <ul className="nav">
                                        <li>
                                            <div className="dropMenuItem">
                                                <Link to="/" onClick={(event) => event.preventDefault()} className="caret">Our Solutions</Link>
                                                <ul className="drop-down drop-list">
                                                    <li>
                                                        <Link to="/fibo-chatbot" onClick={toggleClass}>
                                                            <div>
                                                                <label>FIBO</label>
                                                                <span>Automate sales</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/pigeoniCQRS" onClick={toggleClass}>
                                                            <div>
                                                                <label>IRIS</label>
                                                                <span>Automate customer service</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/bot-as-a-service" onClick={toggleClass}>
                                                            <div>
                                                                <label>Automation Setu</label>
                                                                <span>Bot as a service</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <ExternalLink href="https://www.featsystems.com/automation-process-discovery" rel="noopener" onClick={toggleClass}>
                                                            <div>
                                                                <label>Process Assessment Tool</label>
                                                                <span>Key to your successful automation journey</span>
                                                            </div>
                                                            <img src={externalmg} className="ml-auto" />
                                                        </ExternalLink>
                                                    </li>
                                                    <li>
                                                        <Link to="/automation-solutions" onClick={toggleClass}>
                                                            <div>
                                                                <label>By Industry</label>
                                                                <span>Automation by Industry</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/by-process" onClick={toggleClass}>
                                                            <div>
                                                                <label>By Department</label>
                                                                <span>Automation by Department</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropMenuItem">
                                                <Link to="/" onClick={(event) => event.preventDefault()} className="caret">Our Services</Link>
                                                <ul className="drop-down drop-list">
                                                    <li>
                                                        <Link to="/managing-bot-eco-system-services" onClick={toggleClass}>
                                                            <div>
                                                                <label>Managed Bot Ecosystem</label>
                                                                <span>Digital workforce</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="drop-list-level-2">
                                                        <Link to="/" onClick={(event) => event.preventDefault()}>
                                                            <div>
                                                                <label>Professional Services</label>
                                                                <span>Know more..</span>
                                                            </div>
                                                            <img className="ml-auto" src={rightArrow} /></Link>
                                                        <ul className="drop-down leve-2">
                                                            <li className="drop-list-level-3">
                                                                <Link to="/" onClick={(event) => event.preventDefault()}>
                                                                    <div>
                                                                        <label>Technology</label>
                                                                        <span>Know more..</span>
                                                                    </div>

                                                                    <img className="ml-auto" src={rightArrow} /></Link>
                                                                <ul className="drop-down leve-3">
                                                                    <li>
                                                                        <Link to="/what-is-rpa" onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Robotic Process Automation (RPA)</label>
                                                                                <span>Accelerate productivity</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/what-is-ai" onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Artificial Intelligence (AI)</label>
                                                                                <span>AI can discover responses on its own and fix issues</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/what-is-ocr" onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Optical Character Recognition (OCR)</label>
                                                                                <span>Converting physical data to digital</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/what-is-bpm" onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Business Process Management (BPM)</label>
                                                                                <span>Optimization business operations</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/what-is-iot" onClick={toggleClass}>
                                                                            <div>
                                                                                <label>IOT</label>
                                                                                <span>Solve a spectrum of challenging business problems</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    {/* <li>
                                        <Link to="/">
                                            <div>
                                            <label>Enterprise Applications</label>
                                            <span>Applications for different functional areas and industries</span>                             
                                        </div>
                                        </Link>                  
                                        </li>
                                        <li>
                                        <Link to="/">
                                            <div>
                                            <label>Enterprise Mobility</label>
                                            <span>Build loyalty and reinforce your brand</span>
                                        </div>
                                        </Link>                  
                                        </li>               */}
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <Link to="/center-of-excellence" onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Center Of Excellence</label>
                                                                        <span>The role of a center of excellence in Intelligent Automation</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/consulting-services" onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Consulting</label>
                                                                        <span>We help to create a new vision for your business</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/training-services" onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Training</label>
                                                                        <span>Read our training modules</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/licensing-services" onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Licensing</label>
                                                                        <span>Optimized licenses to scale their RPA operations</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropMenuItem">
                                                <Link to="/" onClick={(event) => event.preventDefault()} className="caret">Pricing</Link>
                                                <ul className="drop-down drop-list">
                                                    <li>
                                                        <Link to="/pigeon-pricings" onClick={toggleClass}>
                                                            <div>
                                                                <label>PIGEON</label>
                                                                <span>Explore Pigeon pricing and features</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/iris-pricings" onClick={toggleClass}>
                                                            <div>
                                                                <label>IRIS</label>
                                                                <span>Explore IRIS pricing and features</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropMenuItem">
                                                <Link to="/" onClick={(event) => event.preventDefault()} className="caret">Partners</Link>
                                                <ul className="drop-down drop-list">
                                                    <li>
                                                        <Link to="/technology-partner" onClick={toggleClass}>
                                                            <div>
                                                                <label>Technology Partner</label>
                                                                <span>Trusted technology partners that support you everywhere</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropMenuItem">
                                                <Link to="/" onClick={(event) => event.preventDefault()} className="caret">Company</Link>
                                                <ul className="drop-down drop-list">
                                                    <li>
                                                        <Link to="/about" onClick={toggleClass}>
                                                            <div>
                                                                <label>About Us</label>
                                                                <span>Providing end-to-end automation solutions</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/vision-mission" onClick={toggleClass}>
                                                            <div>
                                                                <label>Vision Mission</label>
                                                                <span>Create a better society on the earth</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/quality-policy" onClick={toggleClass}>
                                                            <div>
                                                                <label>Quality Policy</label>
                                                                <span>Quality is at our core for each solution and service we deliver</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <ExternalLink href="https://careers.featsystems.com/" target="_blank" rel="noreferrer" onClick={toggleClass}>
                                                            <div>
                                                                <label>Carriers</label>
                                                                <span>Take your career next level</span>
                                                            </div>
                                                            <img src={externalmg} className="ml-auto" />
                                                        </ExternalLink>

                                                    </li>
                                                    <li>
                                                        <ExternalLink href="https://www.amazingrpa.com/index.html" target="_blank" rel="noreferrer" onClick={toggleClass}>
                                                            <div>
                                                                <label>Group Company</label>
                                                                <span>Second Machine Age Consultancy Services Pvt Ltd.</span>
                                                            </div>
                                                            <img src={externalmg} className="ml-auto" />
                                                        </ExternalLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/Contact" onClick={toggleClass}>Contact Us</Link>
                                        </li>
                                        <li>
                                            <div className="dropMenuItem">
                                                <Link to="/" onClick={(event) => event.preventDefault()} className="caret">Resources</Link>
                                                <ul className="drop-down drop-list">
                                                    <li>
                                                        <Link to="/blog" onClick={toggleClass}>
                                                            <div>
                                                                <label>Blogs</label>
                                                                <span>Read our lates news</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/use-case-library" onClick={toggleClass}>
                                                            <div>
                                                                <label>Bot Library</label>
                                                                <span>Watch our Bot Library</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/customer-success-stories" onClick={toggleClass}>
                                                            <div>
                                                                <label>Customer Success Stories</label>
                                                                <span>Read what our customers have to say about us!</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <Link to="/pigeon" className="btn btn-primary ripple" onClick={toggleClass}>PIGEON</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
                <div className={`overlay ${isActive ? "active" : ""}`} onClick={toggleClass}></div>

                <Switch>
                    <Redirect exact from="/" to="/home" />

                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/pigeon">
                        <Pigeon />
                    </Route>
                    <Route path="/fibo-chatbot">
                        <FiboChatbot />
                    </Route>
                    <Route path="/pigeoniCQRS">
                        <Pigeonicqrs />
                    </Route>
                    <Route path="/bot-as-a-service">
                        <Botasaservice />
                    </Route>

                    <Route path="/automation-solutions">
                        <Automationsolutions />
                    </Route>
                    <Route path="/by-process">
                        <Byprocess />
                    </Route>
                    <Route path="/managing-bot-eco-system-services">
                        <Managingbotservices />
                    </Route>

                    <Route path="/center-of-excellence">
                        <Centerofexcellence />
                    </Route>
                    <Route path="/consulting-services">
                        <ConsultingServices />
                    </Route>
                    <Route path="/training-services">
                        <TrainingServices />
                    </Route>
                    <Route path="/licensing-services">
                        <LicensingServices />
                    </Route>
                    <Route path="/what-is-rpa">
                        <WhatIsRpa />
                    </Route>
                    <Route path="/what-is-ai">
                        <WhatIsAi />
                    </Route>
                    <Route path="/what-is-ocr">
                        <WhatIsocr />
                    </Route>
                    <Route path="/what-is-bpm">
                        <WhatIsbpm />
                    </Route>
                    <Route path="/what-is-iot">
                        <WhatIsiot />
                    </Route>
                    <Route path="/pigeon-pricings">
                        <PigeonPricing />
                    </Route>
                    <Route path="/iris-pricings">
                        <IrisPricings />
                    </Route>
                    <Route path="/technology-partner">
                        <TechnologyPartner />
                    </Route>
                    <Route path="/uipath">
                        <UiPath />
                    </Route>
                    <Route path="/automation-anywhere">
                        <AutomationAnywhere />
                    </Route>
                    <Route path="/microsoft-flow">
                        <MicrosoftFlow />
                    </Route>
                    <Route path="/about">
                        <AboutFeat />
                    </Route>
                    <Route path="/vision-mission">
                        <VisionMission />
                    </Route>
                    <Route path="/quality-policy">
                        <QualityPolicy />
                    </Route>
                    <Route path="/customer-success-stories">
                        <CustomerSuccessStories />
                    </Route>
                    <Route path="/use-case-library">
                        <UseCaseLibrary />
                    </Route>

                    <Route path="/rpa-finance-and-banking">
                        <RpaFinanceAndBanking />
                    </Route>

                    <Route path="/cheque-processing-automation">
                        <ChequeProcessing />
                    </Route>
                    <Route path="/potential-npa-report-automation">
                        <NPAReportAutomation />
                    </Route>
                    <Route path="/invoice-processing-automation">
                        <InvoiceProcessingAutomation />
                    </Route>

                    <Route path="/bank-settlement-reconciliation-automation">
                        <BankSettlementAutomation />
                    </Route>
                    <Route path="/upi-imps-complaints-automation">
                        <UPIandIMPSAutomation />
                    </Route>
                    <Route path="/atm-complaints-automation">
                        <ATMComplaintsAutomation />
                    </Route>
                    <Route path="/emi-foreclosure">
                        <EMIForeclosureAutomation />
                    </Route>
                    <Route path="/cms-complaints-download">
                        <CMSComplaintsDownload />
                    </Route>
                    <Route path="/pre-audit-preparation-automation">
                        <PreauditPreparationAutomation />
                    </Route>
                    <Route path="/atm-reconciliation-automation">
                        <ATMReconciliationAutomation />
                    </Route>
                    <Route path="/non-maintenance-charge-reversal-process">
                        <NonMaintenanceChargeReversalProcess />
                    </Route>
                    <Route path="/cpgrams-complaints-automation">
                        <CPGRAMSComplaintsAutomation />
                    </Route>
                    <Route path="/cms-complaints-upload-automation">
                        <CMSComplaintsUploadAutomation />
                    </Route>

                    <Route path="/account-opening-process">
                        <AccountOpeningProcess />
                    </Route>
                    <Route path="/customer-support-automation">
                        <CustomerSupportAutomation />
                    </Route>
                    <Route path="/ckyc-upload-automation">
                        <CKYCUploadAutomation />
                    </Route>
                    <Route path="/ots-repayment-process-automation">
                        <OTSRepaymentProcessAutomation />
                    </Route>
                    <Route path="/crm-process-automation">
                        <CRMprocessAutomation />
                    </Route>
                    <Route path="/duplicate-credit-card-statement-automation">
                        <DuplicateStatementAutomation />
                    </Route>
                    <Route path="/neft-rtgs-reports-automation">
                        <NeftRtgsReportsAutomation />
                    </Route>
                    <Route path="/customer-service">
                        <CustomerServicesProcess />
                    </Route>
                    <Route path="/ekyc-process">
                        <KYCprocess />
                    </Route>
                    <Route path="/report-automation">
                        <ReportAutomationProcess />
                    </Route>
                    <Route path="/account-closure-process">
                        <AccountClosureProcess />
                    </Route>
                    <Route path="/mf-reconciliation-process">
                        <MFreconciliationProcess />
                    </Route>

                    <Route path="/compliance">
                        <ComplianceProcess />
                    </Route>
                    <Route path="/accounts-payable">
                        <AccountPayableProcess />
                    </Route>
                    <Route path="/general-ledger">
                        <GeneralLedgerProcess />
                    </Route>
                    <Route path="/credit-card-processing">
                        <CreditCardProcess />
                    </Route>
                    <Route path="/mortgage-processing">
                        <MortgageProcess />
                    </Route>
                    <Route path="/fraud-detection">
                        <FraudDetectionProcess />
                    </Route>

                    <Route path="/rpa-insurance">
                        <RpaForInsurance />
                    </Route>
                    <Route path="/insurance-claim-process">
                        <InsuranceClaimProcess />
                    </Route>
                    <Route path="/tpa-insurance-and-corporate-credit-business">
                        <TPAInsuranceCorporateCredit />
                    </Route>
                    <Route path="/new-business-and-underwriting">
                        <UnderwritingProcessInsurance />
                    </Route>
                    <Route path="/claims-processing">
                        <ClaimingprocessInsurance />
                    </Route>

                    <Route path="/business-and-process-analytics">
                        <BusinessandProcessAnalytics />
                    </Route>
                    <Route path="/manual-data-entry-process">
                        <ManualDataEntry />
                    </Route>
                    <Route path="/usage-of-legacy-applications">
                        <UsageLegacyApplication />
                    </Route>
                    <Route path="/regulatory-compliance">
                        <RegulatoryCompliance />
                    </Route>

                    <Route path="/policy-cancellation">
                        <PolicyCancellationProcess />
                    </Route>

                    <Route path="/rpa-retail">
                        <RpaForRetail />
                    </Route>

                    <Route path="/invoice-eway-bill-reconciliation-automation">
                        <WaybillReconciliationAutomation />
                    </Route>
                    <Route path="/invoice-posting-process-automation">
                        <InvoicePostingProcessAutomation />
                    </Route>

                    <Route path="/master-data-management">
                        <MasterDataManagement />
                    </Route>

                    <Route path="/invoice-to-good-receipt-matching">
                        <GoodReceiptMatching />
                    </Route>
                    <Route path="/return-processing">
                        <ReturnProcessing />
                    </Route>

                    <Route path="/workflow-management">
                        <WorkflowManagement />
                    </Route>

                    <Route path="/customer-support-management">
                        <CustomerSupportManagement />
                    </Route>

                    <Route path="/erp-management">
                        <ERPManagement />
                    </Route>
                    <Route path="/accounting-and-finance">
                        <AccountingAndFinance />
                    </Route>

                    <Route path="/demand-and-supply-planning">
                        <DemandSupplyPlanning />
                    </Route>

                    <Route path="/marketing-and-consumer-behavior-analysis">
                        <MarketingBehaviorAnalysis />
                    </Route>
                    <Route path="/logistics-and-supply-chain-management">
                        <LogisticsSupplyChainManagement />
                    </Route>

                    <Route path="/rpa-manufacturing">
                        <RpaForManufacturing />
                    </Route>
                    <Route path="/rpa-healthcare">
                        <RpaForHealthcare />
                    </Route>

                    <Route path="/patient-registration">
                        <PatientRegistration />
                    </Route>
                    <Route path="/schedule-appointment">
                        <ScheduleAppointment />
                    </Route>

                    <Route path="/healthcare-workflow-management">
                        <HealthcareWorkflowManagement />
                    </Route>

                    <Route path="/discharge-instructions">
                        <DischargeInstructionProcess />
                    </Route>

                    <Route path="/better-care-cycle">
                        <BetterCareCycle />
                    </Route>

                    <Route path="/mediclaim">
                        <BetterMediclaimProcess />
                    </Route>
                    <Route path="/audit-procedures">
                        <AuditProcedures />
                    </Route>

                    <Route path="/rpa-media">
                        <RPAforMedia />
                    </Route>

                    <Route path="/vendor-contract-renewal-automation">
                        <VendorContractRenewal />
                    </Route>
                    <Route path="/aircheck-process-automation">
                        <AircheckProcessAutomation />
                    </Route>

                    <Route path="/to-process-automation">
                        <ToProcessAutomation />
                    </Route>

                    <Route path="/order-processing">
                        <OrderProcessing />
                    </Route>

                    <Route path="/daily-report-process">
                        <DailyReportProcess />
                    </Route>
                    <Route path="/rpa-airline">
                        <RpaForAirline />
                    </Route>
                    <Route path="/jp-refund-for-ubr">
                        <JPRefundForUBR />
                    </Route>
                    <Route path="/amex-cobrand-member-enrollment-automation">
                        <AmexCobrandAutomation />
                    </Route>

                    <Route path="/rpa-logistics">
                        <RpaForLogistics />
                    </Route>

                    <Route path="/cash-application">
                        <CashApplicationAutomation />
                    </Route>

                    <Route path="/rpa-human-resource">
                        <RpaForHr />
                    </Route>

                    <Route path="/online-job-posting">
                        <OnlineJobPosting />
                    </Route>

                    <Route path="/candidate-sourcing-and-screening">
                        <CandidateSourcingAutomation />
                    </Route>

                    <Route path="/posting-employee-training-details">
                        <PostingEmployeeAutomation />
                    </Route>
                    <Route path="/employee-background-verification">
                        <BackgroundVerificationAutomation />
                    </Route>

                    <Route path="/it-infrastructure">
                        <ItInfrastructure />
                    </Route>

                    <Route path="/password-reset-in-active-directory-automation">
                        <PasswordResetAutomation />
                    </Route>
                    <Route path="/network-outage-ticket-processing-automation">
                        <NetworkProcessingAutomation />
                    </Route>
                    <Route path="/cisco-router-configuration-automation">
                        <RouterConfigurationAutomation />
                    </Route>
                    <Route path="/employee-access-creation-automation">
                        <EmployeeAccessAutomation />
                    </Route>
                    <Route path="/memory-utilization-check-automation">
                        <MemoryUtilizationAutomation />
                    </Route>
                    <Route path="/virtual-machine-creation-automation">
                        <VirtualMachineAutomation />
                    </Route>
                    <Route path="/ios-server-restart-automation">
                        <IOSServerRestartAutomation />
                    </Route>

                    <Route path="/cisco-switch-configuration-migration-automation">
                        <SwitchConfigurationAutomation />
                    </Route>
                    <Route path="/cisco-unified-call-manager-installation">
                        <CUCMAutomation />
                    </Route>
                    <Route path="/physical-to-virtual-machine-creation-automation">
                        <PhysicaltoVirtualAutomation />
                    </Route>
                    <Route path="/printing-configuration">
                        <PrintingConfiguration />
                    </Route>
                    <Route path="/change-password">
                        <ChangePasswordAutomation />
                    </Route>
                    <Route path="/email-migration">
                        <EmailMigrationAutomation />
                    </Route>
                    <Route path="/network-file-sharing">
                        <NetworkFileSharingAutomation />
                    </Route>

                    <Route path="/shrink-file-sql-server">
                        <ShrinkFileinSQLServer />
                    </Route>
                    <Route path="/cpu-optimization">
                        <CpuOptimizationAutomation />
                    </Route>
                    <Route path="/automation-setu-process-definition">
                        <AutomationSetuProcessDefinition />
                    </Route>
                    <Route path="/pigeon-process-definitions">
                        <PigeonProcessDefinitions />
                    </Route>
                    <Route path="/pigeoniVIPS">
                        <PigeoniVIPS />
                    </Route>
                    <Route path="/blog">
                        <FeatBlog />
                    </Route>

                    <Route path="/blog-details">
                        <BlogDetails />
                    </Route>

                    <Route path="/privacy-policy">
                        <PrivacyPolicy />
                    </Route>

                    <Route path="/terms-of-use">
                        <TermsOfUse />
                    </Route>



                </Switch>

                <footer className="footer">
                    <div>
                        <div className="footer-inr container">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul>
                                        <li>Automation</li>
                                        <li className="devider"></li>
                                        <li><Link to="/what-is-rpa">What is Rpa?</Link></li>
                                        <li><Link to="/center-of-excellence">Center of Excellence</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul>
                                        <li>Solutions</li>
                                        <li className="devider"></li>
                                        <li><Link to="/fibo-chatbot">FIBO</Link></li>
                                        <li><Link to="/pigeon">PIGEON</Link></li>
                                        <li><Link to="/bot-as-a-service">Automation Setu</Link></li>
                                        <li><Link to="/use-case-library">Bot Library</Link></li>
                                        <li><ExternalLink href="https://www.featsystems.com/automation-process-discovery">Process Assessment Tool</ExternalLink></li>
                                        <li><Link to="/automation-solutions">By Industry</Link></li>
                                        <li><Link to="/by-process">By Process</Link></li>
                                        <li><Link to="/customer-success-stories">Customer Success Stories</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 md-mt-30">
                                    <ul>
                                        <li>Services</li>
                                        <li className="devider"></li>
                                        <li><Link to="/managing-bot-eco-system-services">Managed Bot Ecosystem</Link></li>
                                        <li><Link to="/consulting-services">Consulting</Link></li>
                                        {/* <li><Link to="#">Technology</Link></li> */}

                                        <li><Link to="/training-services">Training</Link></li>
                                        <li><Link to="/licensing-services">Licensing</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-3 lg-mt-30">
                                    <ul>
                                        <li>Company</li>
                                        <li className="devider"></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/vision-mission">Vision and Mission</Link></li>
                                        <li><Link to="/quality-policy">Quality Policy</Link></li>


                                        <li><Link to="/technology-partner">Technology Partner</Link></li>
                                        <li><ExternalLink href="https://careers.featsystems.com/" target="_blank">Careers</ExternalLink></li>
                                        <li><ExternalLink href="https://www.amazingrpa.com/index.html" target="_blank">Group Company</ExternalLink></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 lg-mt-30">
                                    <ul>
                                        <li>Pricing</li>
                                        <li className="devider"></li>
                                        <li><Link to="/pigeon">Pigeon</Link></li>
                                        <li><Link to="/pigeoniCQRS">IRIS</Link></li>
                                    </ul>
                                    <ul className="mt-30">
                                        <li>Get in Touch</li>
                                        <li className="devider"></li>
                                        <li><a href="mailto:info@featsystems.com">info@featsystems.com</a></li>
                                        <li>USA <a href="callto:+16268421792">+ 1 626 842 1792</a></li>
                                        <li>India <a href="callto:+919321252212">+91 9321252212</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div className="nopadding mt-30">
                            <div className="social-pry">
                                <div className="operations-txt">

                                    <div className="social-icon">
                                        <ul>
                                            <li><ExternalLink href="https://www.linkedin.com/company/featsystems" title="LinkedIn" target="_blank"><img alt="LinkedIn profile icon" src={linkedin} /></ExternalLink></li>
                                            <li><ExternalLink href="https://www.youtube.com/channel/UCWe9bAbK9k1KQYYStfdFctQ" title="Youtube" target="_blank"><img alt="Featsystems YouTube profile icon" src={YouTube} /></ExternalLink></li>
                                            <li><ExternalLink href="https://tube.featsystems.com/" title="Feat Tube" target="_blank"><img alt="Featsystems Feat tube video icon" src={Feattube} /></ExternalLink></li>
                                            <li><ExternalLink href="https://twitter.com/FeatSystems" title="Twitter" target="_blank"><img alt="Featsystems twitter page" src={twitter} /></ExternalLink></li>
                                            <li><ExternalLink href="https://www.facebook.com/featsystems" title="Facebook" target="_blank"><img alt="Facebook page of featsystems" src={facebook} /></ExternalLink></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bottom-pt text-center mt-30">
                        <div className="container">
                            <ul>
                                <li><Link to="/terms-of-use">Terms of Use</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li>© 2011-<span id="year">2021</span> Feat Systems. All rights reserved.</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </ScrollToTop>
        </Router>

    );
};



export default Header;

