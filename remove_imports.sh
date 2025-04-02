#!/bin/bash

# Rimuove import Link
sed -i 's/import { Link } from .wouter.;//g' client/src/pages/*.tsx
sed -i 's/import { Link, useLocation } from .wouter.;//g' client/src/pages/*.tsx
sed -i 's/import { useLocation, Link } from .wouter.;//g' client/src/pages/*.tsx
sed -i 's/import { Switch, Route, Link, useLocation } from .wouter.;/import { Switch, Route } from "wouter";/g' client/src/App.tsx
sed -i 's/import { Switch, Route, useLocation } from .wouter.;/import { Switch, Route } from "wouter";/g' client/src/App.tsx

# Rimuove import useLocation
sed -i 's/import { useLocation } from .wouter.;//g' client/src/pages/*.tsx

# Rendi lo script eseguibile
chmod +x remove_imports.sh
