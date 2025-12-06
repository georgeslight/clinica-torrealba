{ stdenv, bun2nix, ... }:
stdenv.mkDerivation {
  pname = "clinica-torrealba";
  version = "1.0.01";

  src = ./.;

  nativeBuildInputs = [
    bun2nix.hook
  ];

  bunDeps = bun2nix.fetchBunDeps {
    bunNix = ./bun.nix;
  };

  buildPhase = ''
    bun run build
  '';

  installPhase = ''
    mkdir -p $out
    cp -R .next $out/
    cp -R ./public $out/ 2>/dev/null || true
    cp ./package.json $out/
  '';
}
