{
  description = "Clinica Torrealba - Dev with Tools";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
            zsh
          ];

          shellHook = ''
            bun install
            echo ""
            echo "run: bun dev"
            echo ""
            echo "Bun: v$(bun --version)"
            echo ""
            exec zsh
          '';
        };
      }
    );
}
