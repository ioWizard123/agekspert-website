# AG-EKSPERT Web Architecture Design - Pipeline Status

## Overview

Sekvencijalni agent pipeline za kompletnu web arhitekturu AG-EKSPERT-a.

**Timeline:** Parallel izvršavanje faza sa SendMessage koordinacijom  
**Status:** READY TO LAUNCH  
**Target Completion:** ~4-6 sati (ovisno o dubini istraživanja)

---

## Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ USER REQUEST: Dizajn web stranice AG-EKSPERT-a              │
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │   PHASE 1: RESEARCHER AGENT           │
        │   ─────────────────────────────────   │
        │   • Company context analysis           │
        │   • Target audience research          │
        │   • Competitive analysis              │
        │   • Technical requirements            │
        │   • Content inventory                 │
        │   • Design direction hints            │
        │                                       │
        │   Output: Research Report             │
        │   SendMessage → ARCHITECT             │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │   PHASE 2: ARCHITECT AGENT            │
        │   ─────────────────────────────────   │
        │   (Waits for RESEARCHER findings)     │
        │                                       │
        │   • Information architecture          │
        │   • Wireframe design (all pages)      │
        │   • Component library spec            │
        │   • Visual design system              │
        │   • Typography guidelines             │
        │   • Asset requirements                │
        │   • Interactive states                │
        │   • Responsive design strategy        │
        │                                       │
        │   Output: Architecture Design Doc     │
        │   SendMessage → CODER                 │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │   PHASE 3: CODER AGENT                │
        │   ─────────────────────────────────   │
        │   (Waits for ARCHITECT design)        │
        │                                       │
        │   • Technology stack decision         │
        │   • Project structure design          │
        │   • Page specifications               │
        │   • CSS architecture                  │
        │   • JavaScript modules                │
        │   • Performance optimization          │
        │   • SEO & accessibility               │
        │   • Backend integration               │
        │   • Development setup                 │
        │   • Deployment strategy               │
        │                                       │
        │   Output: Technical Specifications    │
        │   Report → DEVELOPMENT TEAM           │
        └───────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ DELIVERABLE: Complete Technical Specification Document      │
│ READY FOR: Development team implementation                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Phase Details

### PHASE 1: RESEARCHER
**Duration:** ~60-90 minutes  
**Agent Type:** Research specialist  
**Input:** User request + AG-EKSPERT context  
**Output:** Comprehensive research report

**Key Deliverables:**
- Company analysis
- 2-3 detailed buyer personas
- Competitive analysis matrix
- Technical requirements checklist
- Content inventory
- Design direction recommendations
- Suggested site structure (7-8 pages)

**File:** `AGENT_PHASE_1_RESEARCHER.md`  
**Next:** SendMessage to 'architect'

---

### PHASE 2: ARCHITECT
**Duration:** ~90-120 minutes  
**Agent Type:** System architect  
**Input:** RESEARCHER findings via SendMessage  
**Output:** Complete architectural design document

**Key Deliverables:**
- Detailed site map with 7-8 pages
- ASCII/text wireframes for every page
- 20+ component specifications (header, footer, hero, cards, forms, etc.)
- 3 color palette options with hex codes
- Typography scale and font pairings
- Responsive design breakpoints (320px, 768px, 1024px, 1440px)
- Complete asset checklist (icons, images, logos)
- Interactive state specifications
- Animation guidelines

**File:** `AGENT_PHASE_2_ARCHITECT.md`  
**Next:** SendMessage to 'coder'

---

### PHASE 3: CODER
**Duration:** ~120-150 minutes  
**Agent Type:** Technical architect/Lead developer  
**Input:** ARCHITECT design via SendMessage  
**Output:** Complete technical specification document

**Key Deliverables:**
- Technology stack recommendation (Vanilla JS vs React)
- Detailed project structure/file organization
- Complete HTML template for all pages
- CSS architecture with examples (BEM, variables, responsive)
- JavaScript module specifications (header, form, search, etc.)
- Performance optimization plan (images, CSS, JS, caching)
- SEO & accessibility checklist
- Backend/form submission strategy (Netlify, Vercel, etc.)
- Development environment setup (package.json, scripts)
- Deployment strategy with config files
- Testing strategy
- Maintenance guidelines

**File:** `AGENT_PHASE_3_CODER.md`  
**Next:** Report to user/development team

---

## Files Created

### Coordination Files
- `ARCHITECTURE_BRIEF.md` - Overall project brief and coordination guide
- `AGENT_PHASE_1_RESEARCHER.md` - Phase 1 detailed instructions
- `AGENT_PHASE_2_ARCHITECT.md` - Phase 2 detailed instructions  
- `AGENT_PHASE_3_CODER.md` - Phase 3 detailed instructions
- `PIPELINE_STATUS.md` - This file

### Expected Outputs (Generated by Agents)
After pipeline completion, expect:
- `AG_EKSPERT_RESEARCH_REPORT.md` - RESEARCHER output
- `AG_EKSPERT_ARCHITECTURE_DESIGN.md` - ARCHITECT output
- `AG_EKSPERT_TECHNICAL_SPECIFICATIONS.md` - CODER output

---

## Execution Instructions

### How to Launch Pipeline

**OPTION 1: Sequential Manual (Recommended for Control)**

1. **Start RESEARCHER Agent**
   - Read: `AGENT_PHASE_1_RESEARCHER.md`
   - Task: Complete comprehensive research
   - Output: Send findings to ARCHITECT

2. **Start ARCHITECT Agent** (After RESEARCHER completes)
   - Read: `AGENT_PHASE_2_ARCHITECT.md`
   - Input: RESEARCHER findings
   - Task: Design complete architecture
   - Output: Send design to CODER

3. **Start CODER Agent** (After ARCHITECT completes)
   - Read: `AGENT_PHASE_3_CODER.md`
   - Input: ARCHITECT design
   - Task: Create technical specifications
   - Output: Report to development team

---

## Coordination Rules

### SendMessage Protocol

**RESEARCHER → ARCHITECT:**
```
To: architect
Subject: AG-EKSPERT Research Findings - Ready for Architecture Design
Message: [Complete research report with all sections from Phase 1 output]
```

**ARCHITECT → CODER:**
```
To: coder
Subject: AG-EKSPERT Architecture Complete - Ready for Technical Specs
Message: [Complete architectural design documentation]
```

**CODER → USER/TEAM:**
```
To: development-team
Subject: AG-EKSPERT Technical Specifications - Ready for Implementation
Message: [Complete technical specification document with all details]
```

### Agent Autonomy

- Each agent works independently until they receive a message
- Agents do NOT wait passively - they work on their assigned task completely
- When passing to next agent, include ALL relevant information
- No polling - communication is event-driven (SendMessage)

### Quality Standards

- Completeness: Each phase must be thorough and production-ready
- Clarity: Documentation must be immediately usable by next agent
- Detail: Specifications must be implementable without asking questions
- Consistency: Follow formatting and structure guidelines in each phase

---

## Roles & Responsibilities

### RESEARCHER Agent
- Deep analysis of company, market, users
- Identifying opportunities and constraints
- Creating foundation for architectural decisions
- Not designing yet - just informing

### ARCHITECT Agent
- Translating research into visual/structural design
- Creating reusable component specifications
- Ensuring responsive and accessible design
- Making visual/UX decisions

### CODER Agent
- Translating architecture into technical specifications
- Choosing technology stack and tools
- Creating implementation-ready code templates
- Defining development workflow

### User (You)
- Launching pipeline with brief
- Reviewing outputs at each phase
- Providing feedback/corrections if needed
- Final approval before handoff to dev team

---

## Timeline Estimate

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1: RESEARCHER | 60-90 min | Pending |
| Phase 2: ARCHITECT | 90-120 min | Pending |
| Phase 3: CODER | 120-150 min | Pending |
| **TOTAL** | **270-360 min** (4.5-6 hrs) | **READY** |

**Buffer:** Add 30-60 min for reviews/corrections

---

## Success Criteria

Pipeline is successful when:

✓ RESEARCHER produces thorough analysis covering all 7 sections  
✓ ARCHITECT creates detailed wireframes + component specs for all pages  
✓ CODER delivers production-ready technical specifications  
✓ All three documents are self-contained and clear  
✓ No missing information that dev team would need  
✓ Design system is cohesive and documented  
✓ Technical stack is justified and specified  
✓ Handoff documentation is complete

---

## Common Issues & Solutions

### Issue: Agent gets stuck waiting for input
**Solution:** Make sure SendMessage format is followed exactly

### Issue: Output is incomplete or vague
**Solution:** Re-read the detailed phase instructions and be thorough

### Issue: Next agent doesn't understand previous output
**Solution:** Ensure all context is included in SendMessage, no assumptions

### Issue: Architecture doesn't match research findings
**Solution:** ARCHITECT should explicitly reference RESEARCHER findings in design

---

## Next Steps

### Immediate
1. Review this document to understand the pipeline
2. Read `ARCHITECTURE_BRIEF.md` for overall context
3. Launch RESEARCHER agent with Phase 1 instructions

### After Each Phase
1. Review agent output for completeness
2. Provide feedback if needed
3. Launch next agent phase
4. Document any decisions/changes

### After Complete Pipeline
1. Consolidate all three documents
2. Create final handoff package for dev team
3. Schedule kickoff with developers
4. Begin implementation phase

---

## Contact & Support

**Questions about pipeline?**
- Review the detailed phase instructions in AGENT_PHASE_*.md files
- Check Success Criteria section for expected outputs
- Verify SendMessage protocol is followed

**Ready to start?**
- Run RESEARCHER agent with AGENT_PHASE_1_RESEARCHER.md
- Let it complete fully before starting ARCHITECT
- Follow the pipeline architecture diagram

---

**Created:** 2026-05-13  
**Project:** AG-EKSPERT Web Architecture Design  
**Status:** READY FOR LAUNCH  
**Next Action:** Start RESEARCHER Agent Phase
