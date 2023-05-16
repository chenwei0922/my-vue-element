import { series, src, dest, watch } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
// 合并js
// import concat from 'gulp-concat'
// 压缩css
// import cleanCSS from 'gulp-clean-css'
import { delPath, themeDistPath, themeRoot } from '@chenwei02/build-utils'
// import sourcemaps from 'gulp-sourcemaps'
// gulp-uglify 压缩和混淆
// gulp-rename 插件修改文件的扩展名
// gulp-clean 清楚打包目录

// 打包样式
export const buildCss = () => {
	const sass = gulpSass(dartSass)
	return (
		src(`${themeRoot}/src/*.scss`)
			.pipe(sass.sync())
			.pipe(autoprefixer({ cascade: false }))
			// .pipe(cleanCSS({}))
			.pipe(dest(`${themeDistPath}`))
	)
}

// 清空打包记录
export const cleanCss = () => {
	return delPath(themeDistPath)
}

// 监听文件变更，重新打包
export const watchCss = () => {
	watch(`${themeRoot}/src/*.scss`, series(cleanCss, buildCss))
}

export default series(cleanCss, buildCss)
