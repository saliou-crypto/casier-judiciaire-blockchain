# Plateforme de Digitalisation du Casier Judiciaire - Sénégal

Projet de mémoire de fin d'études - Master 2 Ingénierie Informatique

## Description

Plateforme web de digitalisation du service de demande de casier judiciaire avec traçabilité blockchain.

## Technologies

### Backend
- Python 3.11
- Django 5
- Django REST Framework
- PostgreSQL 15
- Celery + Redis

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS

### Blockchain
- Ethereum Sepolia Testnet
- Web3.py

## Structure du projet
```
casier-judiciaire-sn/
├── backend/          # API Django
├── frontend/         # Interface React
├── docs/            # Documentation
└── README.md
```

## Installation locale

### Backend
```bash
cd backend
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Auteur

Cheikh saliou DIENG
Mémoire de Master 2 - 2026