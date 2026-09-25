import React, { useState, useEffect } from 'react';
import { Play, X, Sparkles, Video, Film, Terminal, Cpu, ShieldCheck, CheckCircle2, Server, Database, Cloud } from 'lucide-react';

const reels = [
  {
    id: 1,
    title: '.NET Core & Azure Microservices Architecture',
    subtitle: 'Full-Stack Enterprise Solution Reel',
    duration: '2 min 45 sec',
    thumbnail: '/brand/hero_dotnet_cloud.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    youtubeUrl: 'https://www.youtube-nocookie.com/embed/1J65u6J29Sg?autoplay=1',
    codeSnippet: `// VitalitySoft .NET 8 Microservice Architecture
[ApiController]
[Route("api/v1/[controller]")]
public class OrdersController : ControllerBase {
    private readonly IOrderService _orderService;
    private readonly ITelemetryClient _telemetry;

    public OrdersController(IOrderService orderService, ITelemetryClient telemetry) {
        _orderService = orderService;
        _telemetry = telemetry;
    }

    [HttpPost("process-quotation")]
    public async Task<IActionResult> ProcessQuotation([FromBody] QuoteRequest req) {
        _telemetry.TrackEvent("QuoteRequested", req.ClientId);
        var result = await _orderService.CalculateEnterpriseDiscountAsync(req);
        return Ok(new { Status = "Approved", OrderId = result.Id, SLA = "99.99%" });
    }
}`,
    logs: [
      '[00:01.2] GET /api/v1/health -> 200 OK (1.2ms)',
      '[00:02.5] POST /api/v1/orders/process-quotation -> 200 OK (14.2ms)',
      '[00:03.1] Azure SignalR Interop Connected (ConnectionId: 8f9b2c)',
      '[00:04.0] Entity Framework Core query executed on SQL Server (4.2x speed throughput)',
    ],
  },
  {
    id: 2,
    title: 'Salesforce CRM Deal Pipeline Automation',
    subtitle: 'Lightning Web Components & Apex Reel',
    duration: '3 min 10 sec',
    thumbnail: '/brand/salesforce_crm_3d.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    youtubeUrl: 'https://www.youtube-nocookie.com/embed/8-Wb6n2Zz90?autoplay=1',
    codeSnippet: `// VitalitySoft Salesforce Apex Opportunity Trigger
trigger OpportunityQuotationTrigger on Opportunity (after update) {
    List<Quotation__c> quotesToSync = new List<Quotation__c>();
    
    for (Opportunity opp : Trigger.new) {
        if (opp.StageName == 'Closed Won' && Trigger.oldMap.get(opp.Id).StageName != 'Closed Won') {
            Quotation__c q = new Quotation__c(
                Opportunity__c = opp.Id,
                TotalAmount__c = opp.Amount,
                SyncStatus__c = 'Pending ERP Sync'
            );
            quotesToSync.add(q);
        }
    }
    insert quotesToSync;
}`,
    logs: [
      '[00:00.8] Apex Trigger OpportunityQuotationTrigger executed (0.04s)',
      '[00:01.5] LWC Component <c-quote-calculator> rendered',
      '[00:02.8] Salesforce REST API sync to ERP completed: 100% deal pipeline automation',
    ],
  },
  {
    id: 3,
    title: 'Cloud DevOps & Kubernetes CI/CD Pipeline',
    subtitle: 'Automated Hybrid Multicloud Deployment',
    duration: '4 min 15 sec',
    thumbnail: '/brand/devops_cloud_native.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    youtubeUrl: 'https://www.youtube-nocookie.com/embed/X48VuDVv0do?autoplay=1',
    codeSnippet: `# Azure DevOps & Kubernetes Pipeline Spec
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vitalitysoft-net-api
  namespace: production
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: net-web-api
        image: vitalitysoftacr.azurecr.io/net-api:v3.2
        resources:
          limits: { cpu: "500m", memory: "512Mi" }`,
    logs: [
      '[00:01.0] Git Commit Push detected on branch main',
      '[00:02.1] Azure DevOps Pipeline #4082 triggered',
      '[00:04.5] Terraform apply finished (0 errors)',
      '[00:06.0] Kubernetes Cluster Rolling Update Complete: 10x Velocity',
    ],
  },
  {
    id: 4,
    title: 'QA Automated Testing & Security Audits',
    subtitle: 'Selenium & JMeter Performance Suite',
    duration: '2 min 30 sec',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4',
    youtubeUrl: 'https://www.youtube-nocookie.com/embed/5a2d_N_j-bU?autoplay=1',
    codeSnippet: `// VitalitySoft Selenium / Playwright Automated Quality Gate
import { test, expect } from '@playwright/test';

test('Verify Enterprise Solution Matrix & Light/Dark Theme', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');
  await expect(page.locator('h1')).toContainText('Your vision deserves');
  
  // Test Theme Toggle
  const themeBtn = page.locator('button[aria-label="Toggle Theme Mode"]');
  await themeBtn.click();
  await expect(page.locator('body')).toHaveClass(/light-theme/);
  
  // Test Quotation Engine
  await page.click('button:has-text("Get Your Quote")');
  await expect(page.locator('text=Instant Proposal Engine')).toBeVisible();
});`,
    logs: [
      '[00:00.5] Playwright Test Runner initialized (5 workers)',
      '[00:01.2] Test 1: Verify Theme Toggle -> PASSED',
      '[00:02.1] Test 2: JMeter 10,000 Concurrent Users Load Audit -> PASSED (0.00% error rate)',
      '[00:03.0] QA Quality Gate Approved (98% Test Coverage)',
    ],
  },
];

export default function SolutionsDemoReel({ theme }) {
  const [activeReel, setActiveReel] = useState(null);
  const [playerType, setPlayerType] = useState('simulation'); // 'simulation', 'youtube', 'html5'
  const [simLogIndex, setSimLogIndex] = useState(0);

  const handleOpenReel = (reel) => {
    setActiveReel(reel);
    setPlayerType('simulation');
    setSimLogIndex(0);
  };

  useEffect(() => {
    let interval;
    if (activeReel && playerType === 'simulation') {
      interval = setInterval(() => {
        setSimLogIndex((prev) => (prev + 1) % activeReel.logs.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [activeReel, playerType]);

  return (
    <section
      className={`px-6 py-24 md:px-12 md:py-36 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#04060d] text-white border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className={`eyebrow mb-3 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-indigo-400'}`}>
            Software Reels & Live Demos
          </p>
          <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>
            Code tells what specs can't.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {reels.map((r) => (
            <div key={r.id} className="relative group cursor-pointer" onClick={() => handleOpenReel(r)}>
              <div className={`relative h-[340px] md:h-[400px] w-full overflow-hidden rounded-2xl border shadow-[0_30px_70px_rgba(0,0,0,0.25)] ${
                theme === 'light' ? 'bg-white border-gray-300' : 'bg-[#0a0e1c] border-white/15'
              }`}>
                <img
                  src={r.thumbnail}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-black/40 to-transparent"></div>

                {/* Play Button */}
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-indigo-600/80 backdrop-blur-md group-hover:scale-110 group-hover:bg-cyan-500 transition-all shadow-xl">
                  <Play className="ml-1 h-8 w-8 text-white fill-white" />
                </div>

                {/* Card Title */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="eyebrow text-cyan-300 text-[10px]">{r.duration} • {r.subtitle}</span>
                  <h3 className="font-serif text-2xl md:text-3xl italic font-semibold mt-1 text-white">
                    {r.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Video Player & Live Simulation Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          <div className={`relative w-full max-w-4xl p-4 sm:p-6 rounded-3xl border shadow-2xl ${
            theme === 'light' ? 'bg-white border-gray-300 text-[#0f172a]' : 'glass-panel border-white/20 text-white'
          }`}>
            {/* Modal Header & Player Selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 px-2">
              <div>
                <span className="eyebrow text-indigo-600 text-[10px] font-bold">{activeReel.subtitle}</span>
                <h3 className={`font-serif text-xl sm:text-2xl italic font-bold ${
                  theme === 'light' ? 'text-[#0f172a]' : 'text-white'
                }`}>
                  {activeReel.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {/* Source Switcher Buttons */}
                <div className="flex items-center gap-1 p-1 rounded-full bg-gray-100 dark:bg-white/10 text-xs">
                  <button
                    onClick={() => setPlayerType('simulation')}
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-all flex items-center gap-1 ${
                      playerType === 'simulation'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Live Code Telemetry</span>
                  </button>
                  <button
                    onClick={() => setPlayerType('youtube')}
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-all flex items-center gap-1 ${
                      playerType === 'youtube'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600'
                    }`}
                  >
                    <Film className="w-3 h-3" />
                    <span>YouTube Video</span>
                  </button>
                  <button
                    onClick={() => setPlayerType('html5')}
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-all flex items-center gap-1 ${
                      playerType === 'html5'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600'
                    }`}
                  >
                    <Video className="w-3 h-3" />
                    <span>Direct Stream</span>
                  </button>
                </div>

                <button
                  onClick={() => setActiveReel(null)}
                  className={`p-2 rounded-full border transition-colors ${
                    theme === 'light'
                      ? 'text-gray-600 hover:text-black bg-gray-100 border-gray-300'
                      : 'text-gray-300 hover:text-white bg-white/10 border-white/20'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video / Simulation Canvas Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#060913] border border-white/15 shadow-inner">
              {playerType === 'simulation' ? (
                <div className="w-full h-full p-4 md:p-6 font-mono text-xs flex flex-col justify-between bg-[#060913] text-gray-200">
                  {/* IDE Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      <span className="text-[10px] text-gray-400 font-sans ml-2">VitalitySoft IDE — {activeReel.title}</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 flex items-center gap-1 font-sans">
                      <Sparkles className="w-3 h-3 animate-pulse" /> Live Execution
                    </span>
                  </div>

                  {/* Code Editor View */}
                  <div className="flex-1 overflow-y-auto my-3 py-2 px-3 bg-[#0a0e1c] rounded-xl border border-white/10 text-cyan-300 text-[11px] leading-relaxed">
                    <pre className="whitespace-pre-wrap">{activeReel.codeSnippet}</pre>
                  </div>

                  {/* Live Logs Terminal */}
                  <div className="p-3 bg-[#03050a] rounded-xl border border-emerald-500/30 text-[11px] space-y-1">
                    <p className="eyebrow text-emerald-400 text-[9px] mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Live Telemetry Output
                    </p>
                    {activeReel.logs.map((log, i) => (
                      <p key={i} className={`transition-opacity ${i === simLogIndex ? 'text-emerald-300 font-bold' : 'text-gray-400'}`}>
                        {log} {i === simLogIndex ? '← Active Step' : ''}
                      </p>
                    ))}
                  </div>
                </div>
              ) : playerType === 'html5' ? (
                <video
                  src={activeReel.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <iframe
                  src={activeReel.youtubeUrl}
                  title={activeReel.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="mt-3 px-2 flex items-center justify-between text-xs text-gray-500">
              <p>Duration: {activeReel.duration}</p>
              <p className="flex items-center gap-1 text-emerald-600 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                VitalitySoft Solution Telemetry Stream Active
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
