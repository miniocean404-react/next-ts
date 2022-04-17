module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	// 表示你想使用的额外的语言特性
	parserOptions: {
		ecmaVersion: 12, // 'latest' | 11 | 2020  (不自动启用es6全局变量)
		sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
		ecmaFeatures: {
			globalReturn: false, // 允许在全局作用域下使用 return 语句
			impliedStrict: true, // 启用全局 strict mode
			jsx: true, // 启用 JSX
		},
	},
	extends: [
		'next/core-web-vitals',
		// eslint-config-prettier插件:关闭所有不必要或可能与Prettier冲突的规则
		'prettier',
	],
	rules: {
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	},
}
